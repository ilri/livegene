<?php

namespace App\Tests\Entity;

use PHPUnit\Framework\TestCase;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Persistence\ObjectRepository;
use App\Entity\StaffMember;
use App\Entity\StaffRole;

class StaffMemberTest extends TestCase
{
    private static $email = 'Cezar.Pendarovski@ROSLIN.ed.ac.uk';
    private static $staffMember;

    public static function setUpBeforeClass()
    {
        self::$staffMember = new StaffMember();
        self::$staffMember->setUsername('Cpendaro');
        self::$staffMember->setFirstName('Cezar');
        self::$staffMember->setLastName('Pendarovski');
        self::$staffMember->setHomeProgram('CTLGH');
        self::$staffMember->setEmail(self::$email);
    }

    public function setUp()
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

    public function testUsernameIsSavedInLowerCase()
    {
        $this->assertEquals(strtolower(self::$username), self::$staffMember->getUsername());
        $this->assertNotEquals(self::$username, self::$staffMember->getUsername());
    }

    public function testEmailIsSavedInLowerCase()
    {
        $this->assertEquals(strtolower(self::$email), self::$staffMember->getEmail());
        $this->assertNotEquals(self::$email, self::$staffMember->getEmail());
    }

    public function testTotalRolesPercent()
    {
        $this->assertEquals(
            0,
            self::$staffMember->getTotalRolesPercent()
        );

        $percent1 = 0.3000;
        $percent2 = 0.2500;
        $percent3 = 0.2000;
        $staffRole1 = new StaffRole();
        $staffRole1->setPercent($percent1);
        $staffRole2 = new StaffRole();
        $staffRole2->setPercent($percent2);
        $staffRole3 = new StaffRole();
        $staffRole3->setPercent($percent3);
        $totalPercent = $percent1 + $percent2 + $percent3;

        self::$staffMember->addStaffRole($staffRole1);
        self::$staffMember->addStaffRole($staffRole2);
        self::$staffMember->addStaffRole($staffRole3);

        $this->assertEquals(
            $totalPercent,
            self::$staffMember->getTotalRolesPercent()
        );
    }
}
