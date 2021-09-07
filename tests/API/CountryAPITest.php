<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\Entity\Country;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class CountryAPITest extends ApiTestCase
{
    private Client $client;
    private ReferenceRepository $fixtures;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $this->fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\CountryFixtures',
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
        $response = $this->client->request('GET', '/api/countries');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/Country',
            '@id' => '/api/countries',
            '@type' => 'hydra:Collection',
            'hydra:member' => [
                [
                    'id' => 1,
                    'country' => 'GB',
                    'countryName' => 'United Kingdom',
                ]
            ],
            'hydra:totalItems' => 1,
        ]);
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(Country::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/countries');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $country = $this->getCountry();
        $response = $this->client->request('GET', sprintf('/api/countries/%s', $country));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            'id' => 1,
            'country' => 'GB',
            'countryName' => 'United Kingdom',
        ]);
        $this->assertMatchesResourceItemJsonSchema(Country::class);
    }

    public function testPutIsNotAllowed(): void
    {
        $country = $this->getCountry();
        $this->client->request('PUT', sprintf('/api/countries/%s', $country));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $country = $this->getCountry();
        $this->client->request('DELETE', sprintf('/api/countries/%s', $country));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getCountry(): string
    {
        return $this->fixtures->getReference('country')->getCountry();
    }
}
