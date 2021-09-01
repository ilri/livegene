<?php

namespace App\Tests\Entity;

use PHPUnit\Framework\TestCase;
use Carbon\ Carbon;
use Doctrine\Common\Persistence\{
    ObjectRepository,
    ObjectManager
};
use App\Entity\{
    Project,
    CountryRole
};

class ProjectTest extends TestCase
{
    private $now;
    private $project;

    public function setUp(): void
    {
        date_default_timezone_set('UTC');
        $now = Carbon::create(2019, 8, 7, 12);
        Carbon::setTestNow($now);
        $this->project = new Project();

        $projectRepository = $this->createMock(ObjectRepository::class);
        $projectRepository->expects($this->any())
            ->method('find')
            ->willReturn($this->project);

        $objectManager = $this->createMock(ObjectManager::class);
        $objectManager->expects($this->any())
            ->method('getRepository')
            ->willReturn($projectRepository);
    }

    public function testCurrentProjectIsActive(): void
    {
        $this->project->setStartDate(new Carbon('yesterday'));
        $this->project->setEndDate(new Carbon('tomorrow'));
        $this->assertTrue(
            $this->project->getIsActive()
        );
    }

    public function testPastProjectIsNotActive(): void
    {
        $this->project->setStartDate(
            Carbon::now()->sub('30 days')
        );
        $this->project->setEndDate(
            Carbon::now()->sub('10 days')
        );
        $this->assertFalse(
            $this->project->getIsActive()
        );
    }

    public function testFutureProjectIsNotActive(): void
    {
        $this->project->setStartDate(
            Carbon::now()->add('10 days')
        );
        $this->project->setEndDate(
            Carbon::now()->add('30 days')
        );
        $this->assertFalse(
            $this->project->getIsActive()
        );
    }

    public function testProjectEndsSameYearIsActiveThisYear(): void
    {
        $this->project->setStartDate(
            new Carbon('first day of January 2015')
        );
        $this->project->setEndDate(
            new Carbon('last day of March 2019')
        );
        $this->assertTrue(
            $this->project->getIsActiveThisYear()
        );
    }

    public function testProjectStartsSameYearIsActiveThisYear(): void
    {
        $this->project->setStartDate(
            new Carbon('last day of December 2019')
        );
        $this->project->setEndDate(
            new Carbon('last Friday of June 2022')
        );
        $this->assertTrue(
            $this->project->getIsActiveThisYear()
        );
    }

    public function testActiveProjectIsActiveThisYear(): void
    {
        $this->project->setStartDate(
            new Carbon('first day of April 2015')
        );
        $this->project->setEndDate(
            new Carbon('last day of September 2020')
        );
        $this->assertTrue(
            $this->project->getIsActiveThisYear()
        );
    }

    public function testPastYearsProjectIsNotActiveThisYear(): void
    {
        $this->project->setStartDate(
            new Carbon('first Monday of April 2015')
        );
        $this->project->setEndDate(
            new Carbon('last Sunday of August 2018')
        );
        $this->assertFalse(
            $this->project->getIsActiveThisYear()
        );
    }

    public function testNextYearsProjectIsNotActiveThisYear(): void
    {
        $this->project->setStartDate(
            new Carbon('first day of January 2020')
        );
        $this->project->setEndDate(
            new Carbon('last Sunday of September 2023')
        );
        $this->assertFalse(
            $this->project->getIsActiveThisYear()
        );
    }

    public function testTotalCountryRolesPercent(): void
    {
        $this->assertEquals(
            0,
            $this->project->getTotalCountryRolesPercent()
        );

        $percent1 = 0.075;
        $percent2 = 0.025;
        $percent3 = 0.9;
        $countryRole1 = new CountryRole();
        $countryRole1->setPercent($percent1);
        $countryRole2 = new CountryRole();
        $countryRole2->setPercent($percent2);
        $countryRole3 = new CountryRole();
        $countryRole3->setPercent($percent3);
        $totalPercent = $percent1 + $percent2 + $percent3;

        $this->project->addCountryRole($countryRole1);
        $this->project->addCountryRole($countryRole2);
        $this->project->addCountryRole($countryRole3);

        $this->assertEquals(
            $totalPercent,
            $this->project->getTotalCountryRolesPercent()
        );
    }
}
