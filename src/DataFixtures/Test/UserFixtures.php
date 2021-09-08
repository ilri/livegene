<?php

namespace App\DataFixtures\Test;

use App\Application\Sonata\UserBundle\Entity\User;
use Doctrine\Bundle\FixturesBundle\{
    Fixture,
    FixtureGroupInterface,
};
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture implements FixtureGroupInterface
{
    public const PASSWORD = 'password';

    public function load(ObjectManager $manager)
    {
        $usernames = [
            'spa_user',
            'api_user',
            'user',
            'sonata_admin',
            'admin',
            'super_admin'
        ];

        foreach ($usernames as $username) {
            $user = new User();
            $user->setUsername($username);
            $user->setEmail(sprintf('%s@mail.com', $username));
            $user->setPlainPassword(self::PASSWORD);
            $user->setEnabled(true);
            $user->setRoles([sprintf('ROLE_%s', strtoupper($username))]);
            $manager->persist($user);
            $manager->flush();
            $this->addReference($username, $user);
        }
    }

    public static function getGroups(): array
    {
        return ['sonata_user'];
    }
}
