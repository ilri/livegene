<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class ContactAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp(): void
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\ContactFixtures',
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
        $this->client->request('GET', '/api/contacts', [], [], [
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
        $this->client->request('POST', '/api/contacts', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable(): void
    {
        $contact = $this->getContact();
        $this->client->request('GET', sprintf('/api/contacts/%s', $contact), [], [], [
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
        $this->assertArrayHasKey('firstName', $data);
        $this->assertArrayHasKey('lastName', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'title' => 'Dr.',
                'firstName' => 'Max',
                'lastName' => 'Mustermann'
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $contact = $this->getContact();
        $this->client->request('PUT', sprintf('/api/contacts/%s', $contact), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
    {
        $contact = $this->getContact();
        $this->client->request('DELETE', sprintf('/api/contacts/%s', $contact), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getContact(): int
    {
        return $this->fixtures->getReference('contact')->getId();
    }
}
