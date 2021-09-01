<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\AnimalSpeciesRole;

class AnimalSpeciesRoleFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $animalSpeciesRole = new AnimalSpeciesRole();
        $animalSpeciesRole->setProject($this->getReference('project'));
        $animalSpeciesRole->setAnimalSpecies($this->getReference('animal'));
        $animalSpeciesRole->setPercent(0.5);
        $manager->persist($animalSpeciesRole);

        $manager->flush();

        $this->addReference('animal-species-role', $animalSpeciesRole);
    }

    public function getDependencies(): array
    {
        return [
            ProjectFixtures::class,
            AnimalSpeciesFixtures::class,
        ];
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}

