<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\File\File;
use App\Application\Sonata\UserBundle\Entity\Media;

class MediaFixtures extends Fixture implements FixtureGroupInterface
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function load(ObjectManager $manager)
    {
        $mediaManager = $this->container->get('sonata.media.manager.media');
        $media = $mediaManager->create();
        $pdf = new File(__DIR__.'/Assets/test.pdf');
        $media->setBinaryContent($pdf);
        $media->setEnabled(true);
        $media->setName('test.pdf');
        $media->setContext('default');
        $media->setProviderName('sonata.media.provider.file');
        $mediaManager->save($media);

        $this->addReference('media', $media);
    }

    public static function getGroups(): array
    {
        return ['sonata_media'];
    }
}
