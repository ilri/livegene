<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\SamplingActivity;

class SamplingActivityFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $activity = new SamplingActivity();
        $activity->setProject($this->getReference('project'));
        $activity->addSamplingPartner($this->getReference('organisation'));
        $activity->addAnimalSpecies($this->getReference('animal'));
        $activity->addCountry($this->getReference('country'));
        $activity->setDescription('Sampling activity');
        $activity->setStartDate(new \DateTime('2018-01-01'));
        $activity->setEndDate(new \DateTime('2019-12-31'));
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
