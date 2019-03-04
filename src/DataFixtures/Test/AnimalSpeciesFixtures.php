<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\AnimalSpecies;

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

