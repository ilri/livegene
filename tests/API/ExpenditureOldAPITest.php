<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class ExpenditureOldAPITest extends OldApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp(): void
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\ExpenditureFixtures',
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
        $this->client->request('GET', '/api/expenditures', [], [], [
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
        $this->client->request('POST', '/api/expenditures', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable(): void
    {
        $expenditure = $this->getId();
        $this->client->request('GET', sprintf('/api/expenditures/%s', $expenditure), [], [], [
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
        $this->assertArrayHasKey('name', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'ilriCode' => 'ACME001',
                'name' => 'Looney Tunes',
                'homeProgram' => 'ACME',
                'startDate' => '2019-03-01T00:00:00+00:00',
                'endDate' => '2019-12-31T00:00:00+00:00',
                'reportDate' => '2019-11-01T12:00:00+00:00',
                'totalBudget' => 10000,
                'amount' => null
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $expenditure = $this->getId();
        $this->client->request('PUT', sprintf('/api/expenditures/%s', $expenditure), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed(): void
    {
        $expenditure = $this->getId();
        $this->client->request('DELETE', sprintf('/api/expenditures/%s', $expenditure), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getId(): int
    {
        return $this->fixtures->getReference('expenditure')->getId();
    }
}
