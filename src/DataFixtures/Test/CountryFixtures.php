<?php

namespace App\DataFixtures\Test;

use App\Entity\Country;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

class CountryFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $country = new Country();
        $country->setCountry('GB');
        $manager->persist($country);

        $manager->flush();

        $this->addReference('country', $country);
    }

    public static function getGroups(): array
    {
        return ['api', 'sonata_admin'];
    }
}

