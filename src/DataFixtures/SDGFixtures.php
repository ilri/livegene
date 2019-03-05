<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\SDG;

class SDGFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $sdg1 = new SDG();
        $sdg1->setHeadline('NO POVERTY');
        $sdg1->setFullName('End poverty in all its forms everywhere');
        $sdg1->setColor('#E5243B');
        $sdg1->setLink('https://sustainabledevelopment.un.org/sdg1');
        $sdg1->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-01.jpg');
        $manager->persist($sdg1);

        $sdg2 = new SDG();
        $sdg2->setHeadline('ZERO HUNGER');
        $sdg2->setFullName('End hunger, achieve food security and improved nutrition and promote sustainable agriculture');
        $sdg2->setColor('#DDA63A');
        $sdg2->setLink('https://sustainabledevelopment.un.org/sdg2');
        $sdg2->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-02.jpg');
        $manager->persist($sdg2);

        $sdg3 = new SDG();
        $sdg3->setHeadline('GOOD HEALTH AND WELL-BEING');
        $sdg3->setFullName('Ensure healthy lives and promote well-being for all at all ages');
        $sdg3->setColor('#4C9F38');
        $sdg3->setLink('https://sustainabledevelopment.un.org/sdg3');
        $sdg3->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-03.jpg');
        $manager->persist($sdg3);

        $sdg4 = new SDG();
        $sdg4->setHeadline('QUALITY EDUCATION');
        $sdg4->setFullName('Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all');
        $sdg4->setColor('#C5192D');
        $sdg4->setLink('https://sustainabledevelopment.un.org/sdg4');
        $sdg4->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-04.jpg');
        $manager->persist($sdg4);

        $sdg5 = new SDG();
        $sdg5->setHeadline('GENDER EQUALITY');
        $sdg5->setFullName('Achieve gender equality and empower all women and girls');
        $sdg5->setColor('#FF3A21');
        $sdg5->setLink('https://sustainabledevelopment.un.org/sdg5');
        $sdg5->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-05.jpg');
        $manager->persist($sdg5);

        $sdg6 = new SDG();
        $sdg6->setHeadline('CLEAN WATER AND SANITATION');
        $sdg6->setFullName('Ensure availability and sustainable management of water and sanitation for all');
        $sdg6->setColor('#26BDE2');
        $sdg6->setLink('https://sustainabledevelopment.un.org/sdg6');
        $sdg6->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-06.jpg');
        $manager->persist($sdg6);

        $sdg7 = new SDG();
        $sdg7->setHeadline('AFFORDABLE AND CLEAN ENERGY');
        $sdg7->setFullName('Ensure Access to Affordable, Reliable, Sustainable and Modern Energy for all');
        $sdg7->setColor('#FCC29B');
        $sdg7->setLink('https://sustainabledevelopment.un.org/sdg7');
        $sdg7->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-07.jpg');
        $manager->persist($sdg7);

        $sdg8 = new SDG();
        $sdg8->setHeadline('DECENT WORK AND ECONOMIC GROWTH');
        $sdg8->setFullName('Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all');
        $sdg8->setColor('#A21942');
        $sdg8->setLink('https://sustainabledevelopment.un.org/sdg8');
        $sdg8->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-08.jpg');
        $manager->persist($sdg8);

        $sdg9 = new SDG();
        $sdg9->setHeadline('INDUSTRY, INNOVATION AND INFRASTRUCTURE');
        $sdg9->setFullName('Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation');
        $sdg9->setColor('#FD6925');
        $sdg9->setLink('https://sustainabledevelopment.un.org/sdg9');
        $sdg9->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-09.jpg');
        $manager->persist($sdg9);

        $sdg10 = new SDG();
        $sdg10->setHeadline('REDUCED INEQUALITIES');
        $sdg10->setFullName('Reduce inequality within and among countries');
        $sdg10->setColor('#DD1367');
        $sdg10->setLink('https://sustainabledevelopment.un.org/sdg10');
        $sdg10->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-10.jpg');
        $manager->persist($sdg10);

        $sdg11 = new SDG();
        $sdg11->setHeadline('SUSTAINABLE CITIES AND COMMUNITIES');
        $sdg11->setFullName('Make cities and human settlements inclusive, safe, resilient and sustainable');
        $sdg11->setColor('#FD9D24');
        $sdg11->setLink('https://sustainabledevelopment.un.org/sdg11');
        $sdg11->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-11.jpg');
        $manager->persist($sdg11);

        $sdg12 = new SDG();
        $sdg12->setHeadline('RESPONSIBLE CONSUMPTION & PRODUCTION');
        $sdg12->setFullName('Ensure sustainable consumption and production patterns');
        $sdg12->setColor('#BF8B2E');
        $sdg12->setLink('https://sustainabledevelopment.un.org/sdg12');
        $sdg12->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-12.jpg');
        $manager->persist($sdg12);

        $sdg13 = new SDG();
        $sdg13->setHeadline('CLIMATE ACTION');
        $sdg13->setFullName('Take urgent action to combat climate change and its impacts');
        $sdg13->setColor('#3F7E44');
        $sdg13->setLink('https://sustainabledevelopment.un.org/sdg13');
        $sdg13->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-13.jpg');
        $manager->persist($sdg13);

        $sdg14 = new SDG();
        $sdg14->setHeadline('LIFE BELOW WATER');
        $sdg14->setFullName('Conserve and sustainably use the oceans, seas and marine resources for sustainable development');
        $sdg14->setColor('#0A97D9');
        $sdg14->setLink('https://sustainabledevelopment.un.org/sdg14');
        $sdg14->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-14.jpg');
        $manager->persist($sdg14);

        $sdg15 = new SDG();
        $sdg15->setHeadline('LIFE ON LAND');
        $sdg15->setFullName('Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss');
        $sdg15->setColor('#56C02B');
        $sdg15->setLink('https://sustainabledevelopment.un.org/sdg15');
        $sdg15->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-15.jpg');
        $manager->persist($sdg15);

        $sdg16 = new SDG();
        $sdg16->setHeadline('PEACE AND JUSTICE STRONG INSTITUTIONS');
        $sdg16->setFullName('Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels');
        $sdg16->setColor('#00689D');
        $sdg16->setLink('https://sustainabledevelopment.un.org/sdg16');
        $sdg16->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-16.jpg');
        $manager->persist($sdg16);

        $sdg17 = new SDG();
        $sdg17->setHeadline('PARTNERSHIPS FOR THE GOALS');
        $sdg17->setFullName('Strengthen the means of implementation and revitalize the global partnership for sustainable development');
        $sdg17->setColor('#19486A');
        $sdg17->setLink('https://sustainabledevelopment.un.org/sdg17');
        $sdg17->setLogoUrl('https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-17.jpg');
        $manager->persist($sdg17);

        $manager->flush();

        $this->addReference('sdg1', $sdg1);
        $this->addReference('sdg2', $sdg2);
        $this->addReference('sdg3', $sdg3);
        $this->addReference('sdg4', $sdg4);
        $this->addReference('sdg5', $sdg5);
        $this->addReference('sdg6', $sdg6);
        $this->addReference('sdg7', $sdg7);
        $this->addReference('sdg8', $sdg8);
        $this->addReference('sdg9', $sdg9);
        $this->addReference('sdg10', $sdg10);
        $this->addReference('sdg11', $sdg11);
        $this->addReference('sdg12', $sdg12);
        $this->addReference('sdg13', $sdg13);
        $this->addReference('sdg14', $sdg14);
        $this->addReference('sdg15', $sdg15);
        $this->addReference('sdg16', $sdg16);
        $this->addReference('sdg17', $sdg17);
    }

    public static function getGroups(): array
    {
        return ['production', 'api'];
    }
}
