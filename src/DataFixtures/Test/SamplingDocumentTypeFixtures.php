<?php

namespace App\DataFixtures\Test;

use App\Entity\SamplingDocumentType;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

class SamplingDocumentTypeFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $samplingDocumentType = new SamplingDocumentType();
        $samplingDocumentType->setShortName('ATA');
        $samplingDocumentType->setLongName('A test agreement');
        $manager->persist($samplingDocumentType);

        $manager->flush();

        $this->addReference('doctype', $samplingDocumentType);
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}

