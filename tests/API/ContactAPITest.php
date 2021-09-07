<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\Entity\Contact;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class ContactAPITest extends ApiTestCase
{
    private Client $client;
    private ReferenceRepository $fixtures;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $this->fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\ContactFixtures',
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
        $response = $this->client->request('GET', '/api/contacts');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/Contact',
            '@id' => '/api/contacts',
            '@type' => 'hydra:Collection',
            'hydra:member' => [
                [
                    'id' => 1,
                    'title' => 'Dr.',
                    'firstName' => 'Max',
                    'lastName' => 'Mustermann',
                ]
            ],
            'hydra:totalItems' => 1,
        ]);
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(Contact::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/contacts');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $contact = $this->getContact();
        $response = $this->client->request('GET', sprintf('/api/contacts/%s', $contact));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
                'id' => 1,
                'title' => 'Dr.',
                'firstName' => 'Max',
                'lastName' => 'Mustermann'
        ]);
        $this->assertMatchesResourceItemJsonSchema(Contact::class);
    }

    public function testPutIsNotAllowed(): void
    {
        $contact = $this->getContact();
        $this->client->request('PUT', sprintf('/api/contacts/%s', $contact));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed()
    {
        $contact = $this->getContact();
        $this->client->request('DELETE', sprintf('/api/contacts/%s', $contact));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getContact(): int
    {
        return $this->fixtures->getReference('contact')->getId();
    }
}
