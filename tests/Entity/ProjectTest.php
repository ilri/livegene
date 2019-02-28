<?php

namespace App\Tests\Entity;

use PHPUnit\Framework\TestCase;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Persistence\ObjectRepository;
use App\Entity\Project;
use App\Entity\CountryRole;
use App\Entity\SDGRole;

class ProjectTest extends TestCase
{
    private $now;
    private $project;

    public function setUp()
    {
        $this->now = new \DateTime('now');
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

    public function testCurrentProjectIsActive()
    {
        $this->project->setStartDate(new \DateTime('yesterday'));
        $this->project->setEndDate(new \DateTime('tomorrow'));
        $this->assertTrue(
            $this->project->getIsActive()
        );
    }

    public function testPastProjectIsNotActive()
    {
        $this->project->setStartDate(
            $this->now->sub(new \DateInterval('P10D'))
        );
        $this->project->setEndDate(
            $this->now->sub(new \DateInterval('P5D'))
        );
        $this->assertFalse(
            $this->project->getIsActive()
        );
    }

    public function testFutureProjectIsNotActive()
    {
        $this->project->setStartDate(
            $this->now->add(new \DateInterval('P15D'))
        );
        $this->project->setEndDate(
            $this->now->add(new \DateInterval('P30D'))
        );
        $this->assertFalse(
            $this->project->getIsActive()
        );
    }

    public function testTotalCountryRolesPercent()
    {
        $this->assertEquals(
            0,
            $this->project->getTotalCountryRolesPercent()
        );

        $percent1 = 30;
        $percent2 = 25;
        $percent3 = 20;
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
