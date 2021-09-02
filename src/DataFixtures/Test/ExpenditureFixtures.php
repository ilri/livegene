<?php

namespace App\DataFixtures\Test;

use App\Entity\Expenditure;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

class ExpenditureFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $expenditure = new Expenditure();
        $expenditure->setIlriCode('ACME001');
        $expenditure->setName('Looney Tunes');
        $expenditure->setHomeProgram('ACME');
        $expenditure->setStartDate(new \DateTime('2019-03-01'));
        $expenditure->setEndDate(new \DateTime('2019-12-31'));
        $expenditure->setReportDate(new \DateTime('2019-11-01 12:00:00'));
        $expenditure->setTotalBudget(10000);

        $manager->persist($expenditure);

        $manager->flush();

        $this->addReference('expenditure', $expenditure);
    }

    public static function getGroups(): array
    {
        return ['api'];
    }
}

