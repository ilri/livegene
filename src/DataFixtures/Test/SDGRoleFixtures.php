<?php

namespace App\DataFixtures\Test;

use App\DataFixtures\SDGFixtures;
use App\Entity\{
    Project,
    SDG,
    SDGRole,
};
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class SDGRoleFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        /** @var Project $project */
        $project = $this->getReference('project');
        /** @var SDG $sdg */
        $sdg = $this->getReference('sdg1');

        $sdgRole = new SDGRole();
        $sdgRole->setProject($project);
        $sdgRole->setSDG($sdg);
        $sdgRole->setPercent(0.5);
        $manager->persist($sdgRole);

        $manager->flush();

        $this->addReference('sdg-role', $sdgRole);
    }

    public function getDependencies(): array
    {
        return [
            ProjectFixtures::class,
            SDGFixtures::class,
        ];
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}
