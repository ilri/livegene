<?php

namespace App\DataFixtures;

use App\Entity\PartnershipType;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

class PartnershipTypeFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $descriptions = [
            'Unspecified',
            'Co-Investigator',
            'Collaborator',
            'Sub-contractor',
            'Sub-contractee'
        ];

        foreach ($descriptions as $description) {
            $partnershipType = new PartnershipType();
            $partnershipType->setDescription($description);
            $manager->persist($partnershipType);
        }

        $manager->flush();

        $this->addReference('partnership-type', $partnershipType);
    }

    public static function getGroups(): array
    {
        return ['production', 'api'];
    }
}
