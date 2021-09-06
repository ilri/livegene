<?php

namespace App\DataFixtures\Test;

use App\Entity\{
    AnimalSpecies,
    Country,
    Organisation,
    Project,
    SamplingActivity,
};
use DateTime;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class SamplingActivityFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        /** @var Project $project */
        $project = $this->getReference('project');
        /** @var Organisation $organisation */
        $organisation = $this->getReference('organisation');
        /** @var AnimalSpecies $animalSpecies */
        $animalSpecies = $this->getReference('animal');
        /** @var Country $country */
        $country = $this->getReference('country');

        $activity = new SamplingActivity();
        $activity->setProject($project);
        $activity->addSamplingPartner($organisation);
        $activity->addAnimalSpecies($animalSpecies);
        $activity->addCountry($country);
        $activity->setDescription('Sampling activity');
        $activity->setStartDate(new DateTime('2018-01-01'));
        $activity->setEndDate(new DateTime('2019-12-31'));
        $manager->persist($activity);

        $manager->flush();

        $this->addReference('activity', $activity);
    }

    public function getDependencies(): array
    {
        return [
            ProjectFixtures::class,
            OrganisationFixtures::class,
            AnimalSpeciesFixtures::class,
            CountryFixtures::class,
        ];
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}
