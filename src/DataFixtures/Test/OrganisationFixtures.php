<?php

namespace App\DataFixtures\Test;

use App\Entity\{
    Country,
    Organisation
};
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class OrganisationFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        /** @var Country $country */
        $country = $this->getReference('country');

        $organisation = new Organisation();
        $organisation->setShortName('ACME');
        $organisation->setFullName('A Company Making Everything');
        $organisation->setLocalName('A Company Making Everything');
        $organisation->setLink('https://www.acme.co.uk/');
        $organisation->setLogoUrl('https://www.acme.co.uk/images/logo.png');
        $organisation->setCountry($country);
        $manager->persist($organisation);

        $manager->flush();

        $this->addReference('organisation', $organisation);
    }

    public function getDependencies(): array
    {
        return [
            CountryFixtures::class
        ];
    }

    public static function getGroups(): array
    {
        return ['api', 'sonata_admin'];
    }
}
