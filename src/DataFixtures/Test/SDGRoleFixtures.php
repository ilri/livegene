<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\SDGRole;
use App\DataFixtures\SDGFixtures;

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
