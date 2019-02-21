<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Application\Sonata\UserBundle\Entity\User;

class UserFixtures extends Fixture
{
    public const PASSWORD = 'password';

    public function load(ObjectManager $manager)
    {
        $usernames = [
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
}
