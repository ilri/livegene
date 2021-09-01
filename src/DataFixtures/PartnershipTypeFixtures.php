<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\PartnershipType;

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
