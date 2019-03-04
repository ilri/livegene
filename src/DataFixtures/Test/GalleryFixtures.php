<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerInterface;
use App\Application\Sonata\MediaBundle\Entity\Gallery;

class GalleryFixtures extends Fixture implements FixtureGroupInterface
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function load(ObjectManager $manager)
    {
        $galleryManager = $this->container->get('sonata.media.manager.gallery');
        $gallery = $galleryManager->create();
        $gallery->setName('test');
        $gallery->setContext('default');
        $gallery->setEnabled(true);
        $galleryManager->save($gallery);

        $this->addReference('gallery', $gallery);
    }

    public static function getGroups(): array
    {
        return ['sonata_media'];
    }
}
