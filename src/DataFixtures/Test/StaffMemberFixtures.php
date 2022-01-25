<?php

namespace App\DataFixtures\Test;

use App\Entity\StaffMember;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

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
        $staffMember->setIsActive(true);
        $manager->persist($staffMember);

        $manager->flush();

        $this->addReference('coyote', $staffMember);
    }

    public static function getGroups(): array
    {
        return ['api', 'sonata_admin'];
    }
}
