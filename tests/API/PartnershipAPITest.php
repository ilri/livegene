<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\Partnership;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class PartnershipAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\PartnershipFixtures',
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
        $response = $this->client->request('GET', '/api/partnerships');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/Partnership',
                '@id' => '/api/partnerships',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        'id' => 1,
                        'project' => '/api/projects/1',
                        'partner' => '/api/organisations/1',
                        'startDate' => '2018-01-01T00:00:00+00:00',
                        'endDate' => '2019-12-31T00:00:00+00:00',
                        'contacts' => [],
                        'partnershipType' => '/api/partnership_types/5',
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(Partnership::class);
    }

    public function testGetItemIsAvailable(): void
    {
        $partnership = $this->getPartnership();
        $this->client->request('GET', sprintf('/api/partnerships/%s', $partnership));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                'id' => 1,
                'project' => '/api/projects/1',
                'partner' => '/api/organisations/1',
                'startDate' => '2018-01-01T00:00:00+00:00',
                'endDate' => '2019-12-31T00:00:00+00:00',
                'contacts' => [],
                'partnershipType' => '/api/partnership_types/5',
            ]
        );
        $this->assertMatchesResourceItemJsonSchema(Partnership::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/partnerships');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testPutIsNotAllowed(): void
    {
        $partnership = $this->getPartnership();
        $this->client->request('PUT', sprintf('/api/partnerships/%s', $partnership));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $partnership = $this->getPartnership();
        $this->client->request('DELETE', sprintf('/api/partnerships/%s', $partnership));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getPartnership(): int
    {
        return $this->fixtures->getReference('partnership')->getId();
    }
}
