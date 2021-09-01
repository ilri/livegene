<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\SamplingDocumentType;

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

