<?php

namespace App\Tests\API;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Carbon\Carbon;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class ProjectAPITest extends WebTestCase
{
    private $fixtures = null;
    private $client;

    public function setUp()
    {
        date_default_timezone_set('UTC');
        $now = Carbon::create(2019, 8, 8, 9);
        Carbon::setTestNow($now);
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\ProjectFixtures',
            'App\DataFixtures\Test\StaffRoleFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];
        $this->client = $this->makeClient($credentials);
    }

    public function testGetCollectionIsAvailable()
    {
        $this->client->request('GET', '/api/projects', [], [], [
            'HTTP_ACCEPT' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->assertTrue(
            $this->client->getResponse()->headers->contains(
                'Content-Type',
                'application/json; charset=utf-8'
            )
        );
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertCount(1, $data);
    }

    public function testPostIsNotAllowed()
    {
        $this->client->request('POST', '/api/projects', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable()
    {
        $project = $this->getProject();
        $this->client->request('GET', sprintf('/api/projects/%s', $project), [], [], [
            'HTTP_ACCEPT' => 'application/json'
        ]);
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->assertTrue(
            $this->client->getResponse()->headers->contains(
                'Content-Type',
                'application/json; charset=utf-8'
            )
        );
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('ilriCode', $data);
        $this->assertArrayHasKey('fullName', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'ilriCode' => 'ACME001',
                'fullName' => 'Wile E. Coyote and the Road Runner',
                'shortName' => 'Looney Tunes',
                'team' => 'LiveGene',
                'principalInvestigator' => [
                    'id' => 1,
                    'username' => 'coyote',
                    'email' => 'coyote@example.com',
                    'homeProgram' => 'Cartoon',
                    'firstName' => 'Wile E.',
                    'lastName' => 'Coyote',
                    'totalStaffRolesPercent' => 0.5
                ],
                'startDate' => '2018-01-01T00:00:00+00:00',
                'endDate' => '2019-12-31T00:00:00+00:00',
                'donor' => [
                    'id' => 1,
                    'shortName' => 'ACME',
                    'fullName' => 'A Company Making Everything',
                    'localName' => 'A Company Making Everything',
                    'link' => 'https://www.acme.co.uk/',
                    'logoUrl' => 'https://www.acme.co.uk/images/logo.png',
                    'country' => [
                        'id' => 1,
                        'country' => 'GB',
                        'countryName' => 'United Kingdom'
                    ]
                ],
                'donorReference' => '',
                'donorProjectName' => '',
                'totalProjectValue' => 100000,
                'totalIlriValue' => 100000,
                'totalLivegeneValue' => 100000,
                'status' => 0,
                'capacityDevelopment' => 0,
                'staffRoles' => [
                    [
                        'id' => 1,
                        'staffMember' => [
                            'id' => 1,
                            'username' => 'coyote',
                            'email' => 'coyote@example.com',
                            'homeProgram' => 'Cartoon',
                            'firstName' => 'Wile E.',
                            'lastName' => 'Coyote',
                            'totalStaffRolesPercent' => 0.5
                        ],
                        'percent' => '0.5'
                    ]
                ],
                'totalCountryRolesPercent' => 0,
                'totalSDGRolesPercent' => 0,
		'totalAnimalSpeciesRolesPercent' => 0,
                'isActive' => true,
		'isActiveThisYear' => true
            ]
        );
    }

    public function testPutIsNotAllowed()
    {
        $project = $this->getProject();
        $this->client->request('PUT', sprintf('/api/projects/%s', $project), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
    {
        $project = $this->getProject();
        $this->client->request('DELETE', sprintf('/api/projects/%s', $project), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getProject()
    {
        return $this->fixtures->getReference('project')->getId();
    }
}
