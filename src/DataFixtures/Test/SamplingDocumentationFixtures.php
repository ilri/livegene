<?php

namespace App\DataFixtures\Test;

use App\Entity\SamplingDocumentation;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class SamplingDocumentationFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $documentation = new SamplingDocumentation();
        $documentation->setSamplingActivity($this->getReference('activity'));;
        $documentation->setSamplingDocumentType($this->getReference('doctype'));
        $documentation->setDocument($this->getReference('media'));
        $documentation->setStartDate(new \DateTime('2021-01-01'));
        $documentation->setEndDate(new \DateTime('2021-12-31'));
        $manager->persist($documentation);

        $manager->flush();

        $this->addReference('documentation', $documentation);
    }

    public function getDependencies(): array
    {
        return [
            SamplingActivityFixtures::class,
            SamplingDocumentTypeFixtures::class,
            MediaFixtures::class,
        ];
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}
