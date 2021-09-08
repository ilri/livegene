<?php

namespace App\DataFixtures\Test;

use App\DataFixtures\PartnershipTypeFixtures;
use App\Entity\{
    Organisation,
    Partnership,
    PartnershipType,
    Project,
};
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class PartnershipFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        /** @var Organisation $organisation */
        $organisation = $this->getReference('organisation');
        /** @var Project $project */
        $project = $this->getReference('project');
        /** @var PartnershipType $partnerShipType */
        $partnerShipType = $this->getReference('partnership-type');

        $partnership = new Partnership();
        $partnership->setPartner($organisation);
        $partnership->setProject($project);
        $partnership->setPartnershipType($partnerShipType);
        $manager->persist($partnership);

        $manager->flush();

        $this->addReference('partnership', $partnership);
    }

    public function getDependencies(): array
    {
        return [
            ProjectFixtures::class,
            OrganisationFixtures::class,
            PartnershipTypeFixtures::class,
        ];
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}
