<?php

namespace App\DataFixtures\Test;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ProjectFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $project = new Project();
        $project->setIlriCode('ACME001');
        $project->setFullName('Wile E. Coyote and the Road Runner');
        $project->setShortName('Looney Tunes');
        $project->setTeam('LiveGene');
        $project->setPrincipalInvestigator($this->getReference('coyote'));
        $project->setStartDate(new \DateTime('2018-01-01'));
        $project->setEndDate(new \DateTime('2019-12-31'));
        $project->setDonor($this->getReference('organisation'));
        $project->setDonorReference('');
        $project->setDonorProjectName('');
        $project->setTotalProjectValue(100000);
        $project->setTotalIlriValue(100000);
        $project->setTotalLivegeneValue(100000);
        $project->setStatus(0);
        $project->setCapacityDevelopment(0);
        $manager->persist($project);

        $manager->flush();

        $this->addReference('project', $project);
    }

    public function getDependencies(): array
    {
        return [
            StaffMemberFixtures::class,
            OrganisationFixtures::class
        ];
    }

    public static function getGroups(): array
    {
        return ['api', 'sonata_admin'];
    }
}
