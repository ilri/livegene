<?php

namespace App\Tests\Entity;

use App\Entity\{
    StaffMember,
    StaffRole,
};
use Carbon\Carbon;
use Doctrine\Persistence\{
    ObjectManager,
    ObjectRepository,
};
use PHPUnit\Framework\TestCase;

class StaffMemberTest extends TestCase
{
    private static $email = 'Cezar.Pendarovski@ROSLIN.ed.ac.uk';
    private static $username = 'Cpendaro';
    private static $staffMember;
    private static $staffRole1;
    private static $staffRole2;
    private static $staffRole3;
    private static $totalPercent;

    public static function setUpBeforeClass(): void
    {
        date_default_timezone_set('UTC');
        $now = Carbon::create(2021, 2, 1, 12);
        Carbon::setTestNow($now);

        self::$staffMember = new StaffMember();
        self::$staffMember->setUsername(self::$username);
        self::$staffMember->setFirstName('Cezar');
        self::$staffMember->setLastName('Pendarovski');
        self::$staffMember->setHomeProgram('CTLGH');
        self::$staffMember->setEmail(self::$email);

        $percent1 = 0.2500;
        $percent2 = 0.2750;
        $percent3 = 0.4750;
        self::$totalPercent = $percent2 + $percent3;

        self::$staffRole1 = new StaffRole();
        self::$staffRole1->setPercent($percent1);
        self::$staffRole1->setStartDate(new \DateTime('2020-01-01'));
        self::$staffRole1->setEndDate(new \DateTime('2020-12-31'));
        self::$staffRole2 = new StaffRole();
        self::$staffRole2->setPercent($percent2);
        self::$staffRole2->setStartDate(new \DateTime('2021-01-01'));
        self::$staffRole2->setEndDate(new \DateTime('2021-12-31'));
        self::$staffRole3 = new StaffRole();
        self::$staffRole3->setPercent($percent3);
        self::$staffRole3->setStartDate(new \DateTime('2020-01-01'));
        self::$staffRole3->setEndDate(new \DateTime('2021-12-31'));

        self::$staffMember->addStaffRole(self::$staffRole1);
        self::$staffMember->addStaffRole(self::$staffRole2);
        self::$staffMember->addStaffRole(self::$staffRole3);
    }

    public function setUp(): void
    {
        $staffMemberRepository = $this->createMock(ObjectRepository::class);
        $staffMemberRepository->expects($this->any())
            ->method('find')
            ->willReturn(self::$staffMember);

        $objectManager = $this->createMock(ObjectManager::class);
        $objectManager->expects($this->any())
            ->method('getRepository')
            ->willReturn($staffMemberRepository);
    }

    public function testUsernameIsSavedInLowerCase(): void
    {
        $this->assertEquals(strtolower(self::$username), self::$staffMember->getUsername());
        $this->assertNotEquals(self::$username, self::$staffMember->getUsername());
    }

    public function testEmailIsSavedInLowerCase(): void
    {
        $this->assertEquals(strtolower(self::$email), self::$staffMember->getEmail());
        $this->assertNotEquals(self::$email, self::$staffMember->getEmail());
    }

    public function testGetActiveStaffRoles(): void
    {
        $this->assertEquals(
            2,
            sizeof(self::$staffMember->getActiveStaffRoles())
        );
        $this->assertNotContains(
            self::$staffRole1,
            self::$staffMember->getActiveStaffRoles()
        );
        $this->assertContains(
            self::$staffRole2,
            self::$staffMember->getActiveStaffRoles()
        );
        $this->assertContains(
            self::$staffRole3,
            self::$staffMember->getActiveStaffRoles()
        );
    }

    public function testTotalRolesPercent(): void
    {
        $this->assertEquals(
            self::$totalPercent,
            self::$staffMember->getTotalStaffRolesPercent()
        );
    }
}
