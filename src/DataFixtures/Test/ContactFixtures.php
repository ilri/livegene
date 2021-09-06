<?php

namespace App\DataFixtures\Test;

use App\Entity\Contact;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

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

