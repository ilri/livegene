<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class SDGRoleAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp(): void
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\SDGRoleFixtures',
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
        $this->client->request('GET', '/api/sdg_roles', [], [], [
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
        $this->client->request('POST', '/api/sdg_roles', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable(): void
    {
        $sdgRole = $this->getSDGRole();
        $this->client->request('GET', sprintf('/api/sdg_roles/%s', $sdgRole), [], [], [
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
        $this->assertArrayHasKey('SDG', $data);
        $this->assertArrayHasKey('percent', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'project' => '/api/projects/1',
                'SDG' => '/api/sdgs/1',
                'percent' => '0.5',
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $sdgRole = $this->getSDGRole();
        $this->client->request('PUT', sprintf('/api/sdg_roles/%s', $sdgRole), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed(): void
    {
        $sdgRole = $this->getSDGRole();
        $this->client->request('DELETE', sprintf('/api/sdg_roles/%s', $sdgRole), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getSDGRole(): int
    {
        return $this->fixtures->getReference('sdg-role')->getId();
    }
}
