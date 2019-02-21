<?php

namespace App\Tests\Security\Handler;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\DomCrawler\Crawler;
use App\DataFixtures\UserFixtures;

class VoterSecurityHandlerTest extends WebTestCase
{
    private $client;
    private $fixtures = null;

    public function setUp()
    {
        $this->client = $this->createClient();
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\UserFixtures'
        ])->getReferenceRepository();
    }

    /**
     * Test that an anonymous user can access the admin login form.
     */
    public function testAdminLoginForm()
    {
        $crawler = $this->client->request('GET', '/admin/login');

        $this->assertSame(Response::HTTP_OK, $this->client->getResponse()->getStatusCode());
        $this->assertSame(
            'Authentication',
            $crawler->filter('div.login-box-body > p.login-box-msg')->text()
        );
    }

    /**
     * Test that a normal user can not access the admin area.
     */
    public function testUserCannotLoginToAdmin()
    {
        $user = $this->fixtures->getReference('user');
        $this->logIn($user->getUsername());
        $this->client->followRedirect();
        $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(Response::HTTP_FORBIDDEN, $this->client->getResponse()->getStatusCode());
    }

    /**
     * Test that a sonata admin user can access the admin area.
     */
    public function testSonataAdminCanLoginToAdmin()
    {
        $user = $this->fixtures->getReference('sonata_admin');
        $this->logIn($user->getUsername());
        $this->client->followRedirect();
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(Response::HTTP_OK, $this->client->getResponse()->getStatusCode());
        $this->accessAdminArea($crawler);
    }

    /**
     * Test that an admin user can access the admin area.
     */
    public function testAdminCanLoginToAdmin()
    {
        $user = $this->fixtures->getReference('admin');
        $this->logIn($user->getUsername());
        $this->client->followRedirect();
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(Response::HTTP_OK, $this->client->getResponse()->getStatusCode());
        $this->accessAdminArea($crawler);
    }

    /**
     * Test that a super admin user can access the admin area.
     */
    public function testSuperAdminCanLoginToAdmin()
    {
        $user = $this->fixtures->getReference('super_admin');
        $this->logIn($user->getUsername());
        $this->client->followRedirect();
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(Response::HTTP_OK, $this->client->getResponse()->getStatusCode());
        $this->accessAdminArea($crawler);
        $this->assertTrue(
            $crawler->filter('ul.sidebar-menu > li')->children()->count() > 0
        );
        $menuItems = $this->getSidebarMenuItems($crawler);
        $adminGroups = ['Media Library', 'Users'];
        foreach ($adminGroups as $group) {
            $this->assertTrue(in_array($group, $menuItems));
        }
    }

    private function logIn($username)
    {
        $user = $this->fixtures->getReference($username);
        $crawler = $this->client->request('GET', '/admin/login');
        $form = $crawler->filter('button.btn-primary')->form();
        $this->client->submit($form, [
            '_username' => $user->getUsername(),
            '_password' => UserFixtures::PASSWORD
        ]);
    }

    private function accessAdminArea(Crawler $crawler)
    {
        $this->assertSame(
            'LiveGene',
            $crawler->filter('a.logo > span')->text()
        );
    }

    private function getSidebarMenuItems(Crawler $crawler)
    {
        return $crawler->filter('ul.sidebar-menu > li > a > span')->reduce(
            function(Crawler $node, $i) {
                return '' !== $node->text();
            }
        )->each(
            function(Crawler $node, $i) {
                return $node->text();
            }
        );
    }
}
