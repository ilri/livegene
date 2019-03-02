<?php

namespace App\Tests;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\UserFixtures;

class AdminServicesAvailabilityTest extends WebTestCase
{
    private $client;
    private $fixtures = null;

    public function setUp()
    {
        $this->client = $this->createClient();
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Tests\UserFixtures',
        ])->getReferenceRepository();
    }

    /**
     * Helper method.
     * Log in the user through the admin login form.
     */
    private function formLogIn($username)
    {
        $crawler = $this->client->request('GET', '/admin/login');
        $form = $crawler->filter('button.btn-primary')->form();
        $this->client->submit($form, [
            '_username' => $username,
            '_password' => UserFixtures::PASSWORD
        ]);
    }

    /**
     * Test that all LIST and CREATE routes for the admin services are
     * available and accessible by ROLE_SUPER_ADMIN.
     *
     * @dataProvider adminRoutes
     */
    public function testAdminAvailability($route)
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogin($username);

        $this->client->request('GET', $route);
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function adminRoutes()
    {
        $adminServices = [
            'animalspecies',
            'contact',
            'country',
            'countryrole',
            'expenditure',
            'organisation',
            'partnership',
            'partnershiptype',
            'project',
            'sdg',
            'sdgrole',
            'samplingactivity',
            'samplingdocumenttype',
            'staffmember',
            'staffrole',
        ];
        foreach ($adminServices as $service) {
            yield ["/admin/app/$service/list"];
            yield ["/admin/app/$service/create"];
        }
        yield["/admin/search"];
    }
}
