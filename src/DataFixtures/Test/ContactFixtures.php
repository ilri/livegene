<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Contact;

class ContactFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $contact = new Contact();
        $contact->setTitle('Dr.');
        $contact->setFirstName('Max');
        $contact->setLastName('Mustermann');
        $manager->persist($contact);
        
        $manager->flush();

        $this->addReference('contact', $contact);
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}

