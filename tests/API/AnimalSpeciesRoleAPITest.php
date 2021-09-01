<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class AnimalSpeciesRoleAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp(): void
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\AnimalSpeciesRoleFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('api_user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];

        $this->client = $this->createAuthenticatedClient($credentials);
    }

    public function testGetCollectionIsAvailable(): void
    {
        $this->client->request('GET', '/api/animal_species_roles', [], [], [
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

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/animal_species_roles', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable(): void
    {
        $animalSpeciesRole = $this->getAnimalSpeciesRole();
        $this->client->request('GET', sprintf('/api/animal_species_roles/%s', $animalSpeciesRole), [], [], [
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
        $this->assertArrayHasKey('project', $data);
        $this->assertArrayHasKey('animalSpecies', $data);
        $this->assertArrayHasKey('percent', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'project' => '/api/projects/1',
                'animalSpecies' => '/api/animal_species/1',
                'percent' => '0.5',
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $animalSpeciesRole = $this->getAnimalSpeciesRole();
        $this->client->request('PUT', sprintf('/api/animal_species_roles/%s', $animalSpeciesRole), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed(): void
    {
        $animalSpeciesRole = $this->getAnimalSpeciesRole();
        $this->client->request('DELETE', sprintf('/api/animal_species_roles/%s', $animalSpeciesRole), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getAnimalSpeciesRole(): int
    {
        return $this->fixtures->getReference('animal-species-role')->getId();
    }
}
