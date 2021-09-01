<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entity\StaffMember;

class StaffMemberFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $staffMember = new StaffMember();
        $staffMember->setUsername('coyote');
        $staffMember->setFirstName('Wile E.');
        $staffMember->setLastName('Coyote');
        $staffMember->setHomeProgram('Cartoon');
        $staffMember->setEmail('coyote@example.com');
        $manager->persist($staffMember);

        $manager->flush();

        $this->addReference('coyote', $staffMember);
    }

    public static function getGroups(): array
    {
        return ['api', 'sonata_admin'];
    }
}
