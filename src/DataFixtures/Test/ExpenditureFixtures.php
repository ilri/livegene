<?php

namespace App\DataFixtures\Test;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Expenditure;

class ExpenditureFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $expenditure = new Expenditure();
        $expenditure->setIlriCode('ACME001');
        $expenditure->setName('Looney Tunes');
        $expenditure->setHomeProgram('ACME');
        $expenditure->setStartDate(new \DateTime('2019-03-01'));
        $expenditure->setEndDate(new \DateTime('2019-06-30'));
        $expenditure->setReportDate(new \DateTime('2019-07-01 12:00:00'));
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

