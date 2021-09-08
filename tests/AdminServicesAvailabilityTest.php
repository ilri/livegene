<?php

namespace App\Tests;

use App\DataFixtures\Test\UserFixtures;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;

class AdminServicesAvailabilityTest extends WebTestCase
{
    private KernelBrowser $client;
    private ?ReferenceRepository $fixtures = null;

    public function setUp(): void
    {
        $this->client = $this->createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $this->fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
        ])->getReferenceRepository();
    }

    /**
     * Helper method.
     * Log in the user through the admin login form.
     */
    private function formLogIn($username): void
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
    public function testAdminAvailability($route): void
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogin($username);

        $this->client->request('GET', $route);
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function adminRoutes(): \Generator
    {
        $adminServices = [
            'animalspecies',
            'animalspeciesrole',
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
            'samplingdocumentation',
            'samplingdocumenttype',
            'staffmember',
            'staffrole',
        ];
        foreach ($adminServices as $service) {
            yield ["/admin/app/$service/list"];
            yield ["/admin/app/$service/create"];
        }
        yield["/admin/search"];
        yield["/admin/app/samplingdocumentation/create_multiple"];
    }
}
