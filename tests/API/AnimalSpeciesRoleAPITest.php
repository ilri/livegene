<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\AnimalSpeciesRole;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class AnimalSpeciesRoleAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\AnimalSpeciesRoleFixtures',
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
        $response = $this->client->request('GET', '/api/animal_species_roles');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/AnimalSpeciesRole',
                '@id' => '/api/animal_species_roles',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        'id' => 1,
                        'project' => '/api/projects/1',
                        'animalSpecies' => '/api/animal_species/1',
                        'percent' => '0.5',
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(AnimalSpeciesRole::class);

    }

    public function testGetItemIsAvailable(): void
    {
        $animalSpeciesRole = $this->getAnimalSpeciesRole();
        $this->client->request('GET', sprintf('/api/animal_species_roles/%s', $animalSpeciesRole));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                'id' => 1,
                'project' => '/api/projects/1',
                'animalSpecies' => '/api/animal_species/1',
                'percent' => '0.5',
            ]
        );
        $this->assertMatchesResourceItemJsonSchema(AnimalSpeciesRole::class);

    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/animal_species_roles');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testPutIsNotAllowed(): void
    {
        $animalSpeciesRole = $this->getAnimalSpeciesRole();
        $this->client->request('PUT', sprintf('/api/animal_species_roles/%s', $animalSpeciesRole));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $animalSpeciesRole = $this->getAnimalSpeciesRole();
        $this->client->request('DELETE', sprintf('/api/animal_species_roles/%s', $animalSpeciesRole));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);

    }

    private function getAnimalSpeciesRole(): int
    {
        return $this->fixtures->getReference('animal-species-role')->getId();
    }
}
