<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Country;

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

