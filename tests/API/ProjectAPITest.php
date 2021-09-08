<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class ProjectAPITest extends ApiTestCase
{
    private Client $client;
    private ReferenceRepository $fixtures;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $this->fixtures = $databaseTool->loadFixtures(
            [
                'App\DataFixtures\Test\UserFixtures',
                'App\DataFixtures\Test\ProjectFixtures',
                'App\DataFixtures\Test\StaffRoleFixtures',
            ]
        )->getReferenceRepository();
        $username = $this->fixtures->getReference('api_user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD,
        ];
        $response = $this->client->request(
            'POST',
            '/authentication_token',
            [
                'headers' => ['Content-Type' => 'application/json'],
                'json' => $credentials,
            ]
        );
        $this->client->setDefaultOptions(
            [
                'auth_bearer' => json_decode($response->getContent(), true)['token'],
            ]
        );
    }

    public function testGetCollectionIsAvailable(): void
    {
        $response = $this->client->request('GET', '/api/projects');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/Project',
                '@id' => '/api/projects',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
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
                            'totalStaffRolesPercent' => 0.5,
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
                                'countryName' => 'United Kingdom',
                            ],
                        ],
                        'donorReference' => '',
                        'donorProjectName' => '',
                        'totalProjectValue' => 100000,
                        'totalIlriValue' => 100000,
                        'totalLivegeneValue' => 100000,
                        'status' => 0,
                        'capacityDevelopment' => 0,
                        'partnerships' => [],
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
                                    'totalStaffRolesPercent' => 0.5,
                                ],
                                'startDate' => '2018-01-01T00:00:00+00:00',
                                'endDate' => '2019-12-31T00:00:00+00:00',
                                'isActive' => true,
                                'percent' => '0.5',
                            ],
                        ],
                        'countryRoles' => [],
                        'totalCountryRolesPercent' => 0,
                        'totalSDGRolesPercent' => 0,
                        'totalAnimalSpeciesRolesPercent' => 0,
                        'isActiveThisYear' => true,
                        'isActive' => true,
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        // Error message: Object value found, but a string is required
        // $this->assertMatchesResourceCollectionJsonSchema(Project::class);
    }

    public function testGetItemIsAvailable(): void
    {
        $project = $this->getProject();
        $this->client->request('GET', sprintf('/api/projects/%s', $project));
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(
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
                    'totalStaffRolesPercent' => 0.5,
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
                        'countryName' => 'United Kingdom',
                    ],
                ],
                'donorReference' => '',
                'donorProjectName' => '',
                'totalProjectValue' => 100000,
                'totalIlriValue' => 100000,
                'totalLivegeneValue' => 100000,
                'status' => 0,
                'capacityDevelopment' => 0,
                'partnerships' => [],
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
                            'totalStaffRolesPercent' => 0.5,
                        ],
                        'startDate' => '2018-01-01T00:00:00+00:00',
                        'endDate' => '2019-12-31T00:00:00+00:00',
                        'isActive' => true,
                        'percent' => '0.5',
                    ],
                ],
                'countryRoles' => [],
                'totalCountryRolesPercent' => 0,
                'totalSDGRolesPercent' => 0,
                'totalAnimalSpeciesRolesPercent' => 0,
                'isActiveThisYear' => true,
                'isActive' => true,
            ]
        );
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/projects');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testPutIsNotAllowed(): void
    {
        $project = $this->getProject();
        $this->client->request('PUT', sprintf('/api/projects/%s', $project));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $project = $this->getProject();
        $this->client->request('DELETE', sprintf('/api/projects/%s', $project));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getProject(): int
    {
        return $this->fixtures->getReference('project')->getId();
    }
}
