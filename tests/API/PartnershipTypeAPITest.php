<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\Entity\PartnershipType;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class PartnershipTypeAPITest extends ApiTestCase
{
    private Client $client;
    private ?object $entityManager;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\PartnershipTypeFixtures',
        ])->getReferenceRepository();
        $username = $fixtures->getReference('api_user')->getUsername();
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
        $this->entityManager = self::$container->get('doctrine.orm.entity_manager');
    }

    public function testGetCollectionIsAvailable(): void
    {
        $response = $this->client->request('GET', '/api/partnership_types');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/PartnershipType',
            '@id' => '/api/partnership_types',
            '@type' => 'hydra:Collection',
            'hydra:member' => [
                    [
                        'id' => 1,
                        'description' => 'Unspecified',
                    ],
                    [
                        'id' => 2,
                        'description' => 'Co-Investigator',
                    ],
                    [
                        'id' => 3,
                        'description' => 'Collaborator',
                    ],
                    [
                        'id' => 4,
                        'description' => 'Sub-contractor',
                    ],
                    [
                        'id' => 5,
                        'description' => 'Sub-contractee',
                    ]
            ],
            'hydra:totalItems' => 5,
        ]);
        $this->assertCount(5, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(PartnershipType::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/partnership_types');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }


    public function testGetItemIsAvailable(): void
    {
        $partnership_type = $this->getPartnershipType();
        $this->client->request('GET', sprintf('/api/partnership_types/%s', $partnership_type));
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains([
                'id' => 1,
                'description' => 'Unspecified',
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $partnership_type = $this->getPartnershipType();
        $this->client->request('PUT', sprintf('/api/partnership_types/%s', $partnership_type));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $partnership_type = $this->getPartnershipType();
        $this->client->request('DELETE', sprintf('/api/partnership_types/%s', $partnership_type));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getPartnershipType(): int
    {
        return $this->entityManager->getRepository(PartnershipType::class)->findOneByDescription('Unspecified')->getId();
    }
}
