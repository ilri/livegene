<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class OrganisationAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp(): void
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\OrganisationFixtures',
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
        $this->client->request('GET', '/api/organisations', [], [], [
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
        $this->client->request('POST', '/api/organisations', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable(): void
    {
        $organisation = $this->getOrganisation();
        $this->client->request('GET', sprintf('/api/organisations/%s', $organisation), [], [], [
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
        $this->assertArrayHasKey('shortName', $data);
        $this->assertArrayHasKey('fullName', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'shortName' => 'ACME',
                'fullName' => 'A Company Making Everything',
                'localName' => 'A Company Making Everything',
                'link' => 'https://www.acme.co.uk/',
                'logoUrl' => 'https://www.acme.co.uk/images/logo.png',
                'country' => [
                    'id' => 1,
                    'country' => 'GB',
                    'countryName' => 'United Kingdom'
                ]
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $organisation = $this->getOrganisation();
        $this->client->request('PUT', sprintf('/api/organisations/%s', $organisation), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed(): void
    {
        $organisation = $this->getOrganisation();
        $this->client->request('DELETE', sprintf('/api/organisations/%s', $organisation), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getOrganisation(): int
    {
        return $this->fixtures->getReference('organisation')->getId();
    }
}
