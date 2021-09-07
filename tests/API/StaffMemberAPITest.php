<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\StaffMember;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class StaffMemberAPITest extends ApiTestCase
{
    private Client $client;
    private ReferenceRepository $fixtures;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $this->fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\StaffMemberFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('api_user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];
        $response = $this->client->request('POST', '/authentication_token', [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => $credentials,
        ]);
        $this->client->setDefaultOptions([
            'auth_bearer' => json_decode($response->getContent(), true)['token'],
        ]);
    }

    public function testGetCollectionIsAvailable(): void
    {
        $response = $this->client->request('GET', '/api/staff');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/StaffMember',
            '@id' => '/api/staff',
            '@type' => 'hydra:Collection',
            'hydra:member' => [
                [
                    'id' => 1,
                    'username' => 'coyote',
                    'email' => 'coyote@example.com',
                    'homeProgram' => 'Cartoon',
                    'firstName' => 'Wile E.',
                    'lastName' => 'Coyote',
                ]
            ],
            'hydra:totalItems' => 1,
        ]);
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(StaffMember::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/staff');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $coyote = $this->getStaffMember();
        $this->client->request('GET', sprintf('/api/staff/%s', $coyote));
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains([
                'id' => 1,
                'username' => 'coyote',
                'email' => 'coyote@example.com',
                'homeProgram' => 'Cartoon',
                'firstName' => 'Wile E.',
                'lastName' => 'Coyote',
                'totalStaffRolesPercent' => 0
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $coyote = $this->getStaffMember();
        $this->client->request('PUT', sprintf('/api/staff/%s', $coyote));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $coyote = $this->getStaffMember();
        $this->client->request('DELETE', sprintf('/api/staff/%s', $coyote));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getStaffMember(): string
    {
        return $this->fixtures->getReference('coyote')->getId();
    }
}
