<?php

namespace App\Tests\API;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class AnimalSpeciesRoleAPITest extends WebTestCase
{
    private $fixtures = null;
    private $client;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\AnimalSpeciesRoleFixtures',
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

    public function testPostIsNotAllowed()
    {
        $this->client->request('POST', '/api/animal_species_roles', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable()
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

    public function testPutIsNotAllowed()
    {
        $animalSpeciesRole = $this->getAnimalSpeciesRole();
        $this->client->request('PUT', sprintf('/api/animal_species_roles/%', $animalSpeciesRole), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
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

    private function getAnimalSpeciesRole()
    {
        return $this->fixtures->getReference('animal-species-role')->getId();
    }
}
