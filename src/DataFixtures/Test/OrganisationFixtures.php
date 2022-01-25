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

        // The properties link and logoUrl are optional and must NOT be set here.
        // Otherwise, PHP internal functions like get_headers() and file_get_contents()
        // will be called and the tests will break.
        $organisation = new Organisation();
        $organisation->setShortName('ACME');
        $organisation->setFullName('A Company Making Everything');
        $organisation->setLocalName('A Company Making Everything');
        $organisation->setLogoBackgroundColor('#FFFFFF');
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
