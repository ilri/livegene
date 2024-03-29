<?php

namespace App\DataFixtures\Test;

use App\Entity\{
    Country,
    CountryRole,
    Project,
};
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CountryRoleFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        /** @var Project $project */
        $project = $this->getReference('project');
        /** @var Country $country */
        $country = $this->getReference('country');

        $countryRole = new CountryRole();
        $countryRole->setProject($project);
        $countryRole->setCountry($country);
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
