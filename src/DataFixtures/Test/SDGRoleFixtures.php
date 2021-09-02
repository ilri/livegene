<?php

namespace App\DataFixtures\Test;

use App\DataFixtures\SDGFixtures;
use App\Entity\SDGRole;
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
        $sdgRole = new SDGRole();
        $sdgRole->setProject($this->getReference('project'));
        $sdgRole->setSDG($this->getReference('sdg1'));
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
