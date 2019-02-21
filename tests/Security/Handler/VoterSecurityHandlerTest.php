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
        $username = $this->fixtures->getReference('user')->getUsername();
        $this->logIn($username);
        $this->client->followRedirect();
        $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(
            Response::HTTP_FORBIDDEN,
            $this->client->getResponse()->getStatusCode()
        );
    }

    /**
     * Test that a normal user can access the API platform.
     */
    public function testUserCanAccessApiPlatform()
    {
        $username = $this->fixtures->getReference('user')->getUsername();
        $this->logIn($username);
        $formats = ['jsonld', 'json', 'html'];
        foreach ($formats as $format) {
            $this->client->request('GET', sprintf('/api/index.%s', $format));
            $this->assertSame(
                Response::HTTP_OK,
                $this->client->getResponse()->getStatusCode()
            );
            $this->client->request('GET', sprintf('/api/docs.%s', $format));
            $this->assertSame(
                Response::HTTP_OK,
                $this->client->getResponse()->getStatusCode()
            );
        }
    }

    /**
     * Test that a sonata admin user can access the admin area.
     */
    public function testSonataAdminCanLoginToAdmin()
    {
        $username = $this->fixtures->getReference('sonata_admin')->getUsername();
        $this->logIn($username);
        $this->client->followRedirect();
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->accessAdminArea($crawler, $username);
    }

    /**
     * Test that an admin user can access the admin area.
     */
    public function testAdminCanLoginToAdmin()
    {
        $username = $this->fixtures->getReference('admin')->getUsername();
        $this->logIn($username);
        $this->client->followRedirect();
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->accessAdminArea($crawler, $username);
    }

    /**
     * Test that a super admin user can access the admin area.
     */
    public function testSuperAdminCanLoginToAdmin()
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->logIn($username);
        $this->client->followRedirect();
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->accessAdminArea($crawler, $username);

        // the sidebar menu should contain the admin groups
        // for sonata_media and sonata_user
        $this->assertGreaterThan(
            0,
            $crawler->filter('ul.sidebar-menu > li')->children()->count()
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

    private function accessAdminArea(Crawler $crawler, $username)
    {
        $this->assertSame(
            'LiveGene',
            $crawler->filter('a.logo > span')->text()
        );
        $this->assertSame(
            $username,
            $crawler->filter('li.user-header > p')->text()
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
