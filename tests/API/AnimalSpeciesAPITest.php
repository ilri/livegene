<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\AnimalSpecies;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class AnimalSpeciesAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\AnimalSpeciesFixtures',
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
        $response = $this->client->request('GET', '/api/animal_species');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/AnimalSpecies',
                '@id' => '/api/animal_species',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        'id' => 1,
                        'commonName' => 'Cattle',
                        'scientificName' => 'Bos taurus',
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(AnimalSpecies::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/animal_species');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $animal = $this->getAnimal();
        $response = $this->client->request('GET', sprintf('/api/animal_species/%s', $animal));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                'id' => 1,
                'commonName' => 'Cattle',
                'scientificName' => 'Bos taurus',
            ]
        );
        $this->assertMatchesResourceItemJsonSchema(AnimalSpecies::class);
    }

    private function getAnimal(): int
    {
        return $this->fixtures->getReference('animal')->getId();
    }

    public function testPutIsNotAllowed(): void
    {
        $animal = $this->getAnimal();
        $this->client->request('PUT', sprintf('/api/animal_species/%s', $animal));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $animal = $this->getAnimal();
        $this->client->request('DELETE', sprintf('/api/animal_species/%s', $animal));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }
}
