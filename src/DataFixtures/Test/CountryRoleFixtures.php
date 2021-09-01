<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\CountryRole;

class CountryRoleFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $countryRole = new CountryRole();
        $countryRole->setProject($this->getReference('project'));
        $countryRole->setCountry($this->getReference('country'));
        $countryRole->setPercent(0.5);
        $manager->persist($countryRole);

        $manager->flush();

        $this->addReference('country-role', $countryRole);
    }

    public function getDependencies(): array
    {
        return [
            ProjectFixtures::class,
            CountryFixtures::class,
        ];
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}
