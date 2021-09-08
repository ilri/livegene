<?php

namespace App\DataFixtures\Test;

use App\Entity\{
    Project,
    StaffMember,
    StaffRole,
};
use DateTime;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class StaffRoleFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        /** @var Project $project */
        $project = $this->getReference('project');
        /** @var StaffMember $staffMember */
        $staffMember = $this->getReference('coyote');

        $staffRole = new StaffRole();
        $staffRole->setProject($project);
        $staffRole->setStaffMember($staffMember);
        $staffRole->setPercent(0.5);
        $staffRole->setStartDate(new DateTime('2018-01-01'));
        $staffRole->setEndDate(new DateTime('2019-12-31'));
        $manager->persist($staffRole);

        $manager->flush();

        $this->addReference('staff-role', $staffRole);
    }

    public function getDependencies(): array
    {
        return [
            ProjectFixtures::class,
            StaffMemberFixtures::class
        ];
    }

    public static function getGroups(): array
    {
        return ['api', 'sonata_admin'];
    }
}
