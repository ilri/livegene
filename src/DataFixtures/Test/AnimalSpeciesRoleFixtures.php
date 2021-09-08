<?php

namespace App\DataFixtures\Test;

use App\Entity\{
    AnimalSpecies,
    AnimalSpeciesRole,
    Project,
};
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class AnimalSpeciesRoleFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        /** @var Project $project */
        $project = $this->getReference('project');
        /** @var AnimalSpecies $animalSpecies */
        $animalSpecies = $this->getReference('animal');

        $animalSpeciesRole = new AnimalSpeciesRole();
        $animalSpeciesRole->setProject($project);
        $animalSpeciesRole->setAnimalSpecies($animalSpecies);
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

