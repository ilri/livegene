<?php

namespace App\DataFixtures\Test;

use App\Entity\StaffRole;
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
        $staffRole = new StaffRole();
        $staffRole->setProject($this->getReference('project'));
        $staffRole->setStaffMember($this->getReference('coyote'));
        $staffRole->setPercent(0.5);
        $staffRole->setStartDate(new \DateTime('2018-01-01'));
        $staffRole->setEndDate(new \DateTime('2019-12-31'));
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
