<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Application\Sonata\MediaBundle\Entity\Gallery;

class GalleryFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $gallery = new Gallery();
        $gallery->setName('test');
        $gallery->setContext('default');
        $gallery->setEnabled(true);
        $manager->persist($gallery);
        $manager->flush();
        $this->addReference('gallery', $gallery);
    }
}
