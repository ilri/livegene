<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\StaffRole;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class StaffRoleAPITest extends ApiTestCase
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
        $response = $this->client->request('GET', '/api/staff_roles');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/StaffRole',
                '@id' => '/api/staff_roles',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        'id' => 1,
                        'project' => [
                            'id' => 1,
                            'ilriCode' => 'ACME001',
                            'fullName' => 'Wile E. Coyote and the Road Runner',
                            'shortName' => 'Looney Tunes',
                            'team' => 'LiveGene',
                            'isActive' => false,
                        ],
                        'staffMember' => [
                            'id' => 1,
                            'username' => 'coyote',
                            'email' => 'coyote@example.com',
                            'homeProgram' => 'Cartoon',
                            'firstName' => 'Wile E.',
                            'lastName' => 'Coyote',
                        ],
                        'startDate' => '2018-01-01T00:00:00+00:00',
                        'endDate' => '2019-12-31T00:00:00+00:00',
                        'isActive' => false,
                        'percent' => '0.5',
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        //$this->assertMatchesResourceCollectionJsonSchema(StaffRole::class);
    }

    public function testGetItemIsAvailable(): void
    {
        $staffRole = $this->getStaffRole();
        $this->client->request('GET', sprintf('/api/staff_roles/%s', $staffRole));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                'id' => 1,
                'project' => [
                    'id' => 1,
                    'ilriCode' => 'ACME001',
                    'fullName' => 'Wile E. Coyote and the Road Runner',
                    'shortName' => 'Looney Tunes',
                    'team' => 'LiveGene',
                    'isActive' => false,
                ],
                'staffMember' => [
                    'id' => 1,
                    'username' => 'coyote',
                    'email' => 'coyote@example.com',
                    'homeProgram' => 'Cartoon',
                    'firstName' => 'Wile E.',
                    'lastName' => 'Coyote',
                ],
                'startDate' => '2018-01-01T00:00:00+00:00',
                'endDate' => '2019-12-31T00:00:00+00:00',
                'isActive' => false,
                'percent' => '0.5',
            ]
        );
       // $this->assertMatchesResourceItemJsonSchema(StaffRole::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/staff_roles');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);

    }

    public function testPutIsNotAllowed(): void
    {
        $staffRole = $this->getStaffRole();
        $this->client->request('PUT', sprintf('/api/staff_roles/%s', $staffRole));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $staffRole = $this->getStaffRole();
        $this->client->request('DELETE', sprintf('/api/staff_roles/%s', $staffRole));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getStaffRole(): int
    {
        return $this->fixtures->getReference('staff-role')->getId();
    }
}
