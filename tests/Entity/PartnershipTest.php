<?php

namespace App\Tests\Entity;

use PHPUnit\Framework\TestCase;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Persistence\ObjectRepository;
use App\Entity\Partnership;
use App\Entity\Project;

class PartnershipTest extends TestCase
{
    private static $startDate;
    private static $endDate;
    private static $partnership;
    private static $project;

    public static function setUpBeforeClass()
    {
        $today = new \DateTime('today');
        self::$startDate = $today->sub(new \DateInterval('P10D'));
        self::$endDate = $today->add(new \DateInterval('P10D'));
        self::$partnership = new Partnership();
        self::$project = new Project();
    }

    public function setUp()
    {
        $partnershipRepository = $this->createMock(ObjectRepository::class);
        $partnershipRepository->expects($this->any())
            ->method('find')
            ->willReturn(self::$partnership);

        $objectManager = $this->createMock(ObjectManager::class);
        $objectManager->expects($this->any())
            ->method('getRepository')
            ->willReturn($partnershipRepository);
    }

    public function testPartnershipDatesAreNull()
    {
        $this->assertNull(self::$partnership->getStartDate());
        $this->assertNull(self::$partnership->getEndDate());
    }

    public function testProjectDatesAreDisplayed()
    {
        self::$project->setStartDate(self::$startDate);
        self::$project->setEndDate(self::$endDate);
        self::$partnership->setProject(self::$project);
        $this->assertSame(self::$startDate, self::$partnership->getStartDate());
        $this->assertSame(self::$endDate, self::$partnership->getEndDate());
    }

    public function testPartnershipDatesAreDisplayed()
    {
        $yesterday = new \DateTime('yesterday');
        $tomorrow = new \DateTime('tomorrow');
        self::$partnership->setStartDate($yesterday);
        self::$partnership->setEndDate($tomorrow);
        $this->assertSame($yesterday, self::$partnership->getStartDate());
        $this->assertSame($tomorrow, self::$partnership->getEndDate());
    }
}
