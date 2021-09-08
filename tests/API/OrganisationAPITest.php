<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\Organisation;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class OrganisationAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\OrganisationFixtures',
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
        $response = $this->client->request('GET', '/api/organisations');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/Organisation',
                '@id' => '/api/organisations',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
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
                            'countryName' => 'United Kingdom',
                        ],
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        //$this->assertMatchesResourceCollectionJsonSchema(Organisation::class);
    }

    public function testGetItemIsAvailable(): void
    {
        $organisation = $this->getOrganisation();
        $this->client->request('GET', sprintf('/api/organisations/%s', $organisation));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
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
                    'countryName' => 'United Kingdom',
                ],
            ]
        );
        // $this->assertMatchesResourceItemJsonSchema(Organisation::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/organisations');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testPutIsNotAllowed(): void
    {
        $organisation = $this->getOrganisation();
        $this->client->request('PUT', sprintf('/api/organisations/%s', $organisation));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $organisation = $this->getOrganisation();
        $this->client->request('DELETE', sprintf('/api/organisations/%s', $organisation));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getOrganisation(): int
    {
        return $this->fixtures->getReference('organisation')->getId();
    }
}
