<?php

namespace App\DataFixtures\Test;

use App\Application\Sonata\MediaBundle\Entity\Media;
use App\Entity\{
    SamplingActivity,
    SamplingDocumentation,
    SamplingDocumentType,
};
use DateTime;
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
        /** @var SamplingActivity $samplingActivity */
        $samplingActivity = $this->getReference('activity');
        /** @var  SamplingDocumentType $samplingDocumentType */
        $samplingDocumentType = $this->getReference('doctype');
        /** @var Media $media */
        $media = $this->getReference('media');

        $documentation = new SamplingDocumentation();
        $documentation->setSamplingActivity($samplingActivity);
        $documentation->setSamplingDocumentType($samplingDocumentType);
        $documentation->setDocument($media);
        $documentation->setStartDate(new DateTime('2021-01-01'));
        $documentation->setEndDate(new DateTime('2021-12-31'));
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
