<?php

namespace App\DataFixtures\Test;

use App\Entity\AnimalSpecies;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

class AnimalSpeciesFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $animal = new AnimalSpecies();
        $animal->setCommonName('Cattle');
        $animal->setScientificName('Bos taurus');
        $manager->persist($animal);

        $manager->flush();

        $this->addReference('animal', $animal);
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}

