<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class SamplingActivityAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\SamplingActivityFixtures',
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
        $response = $this->client->request('GET', '/api/sampling_activities');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/SamplingActivity',
                '@id' => '/api/sampling_activities',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        'id' => 1,
                        'project' => '/api/projects/1',
                        'samplingPartners' => [
                            '/api/organisations/1',
                        ],
                        'animalSpecies' => [
                            [
                                'id' => 1,
                                'commonName' => 'Cattle',
                                'scientificName' => 'Bos taurus',
                            ],
                        ],
                        'countries' => [
                            [
                                'id' => 1,
                                'country' => 'GB',
                                'countryName' => 'United Kingdom',
                            ],
                        ],
                        'description' => 'Sampling activity',
                        'startDate' => '2018-01-01T00:00:00+00:00',
                        'endDate' => '2019-12-31T00:00:00+00:00',
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        // Error message: Object value found, but a string is required
        // $this->assertMatchesResourceCollectionJsonSchema(SamplingActivity::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/sampling_activities');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $activity = $this->getSamplingActivity();
        $this->client->request('GET', sprintf('/api/sampling_activities/%s', $activity));
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(
            [
                'id' => 1,
                'project' => '/api/projects/1',
                'samplingPartners' => [
                    '/api/organisations/1',
                ],
                'animalSpecies' => [
                    [
                        'id' => 1,
                        'commonName' => 'Cattle',
                        'scientificName' => 'Bos taurus',
                    ],
                ],
                'countries' => [
                    [
                        'id' => 1,
                        'country' => 'GB',
                        'countryName' => 'United Kingdom',
                    ],
                ],
                'description' => 'Sampling activity',
                'startDate' => '2018-01-01T00:00:00+00:00',
                'endDate' => '2019-12-31T00:00:00+00:00',
            ],
        );
    }

    private function getSamplingActivity(): int
    {
        return $this->fixtures->getReference('activity')->getId();
    }

    public function testPutIsNotAllowed(): void
    {
        $activity = $this->getSamplingActivity();
        $this->client->request('PUT', sprintf('/api/sampling_activities/%s', $activity));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $activity = $this->getSamplingActivity();
        $this->client->request('DELETE', sprintf('/api/sampling_activities/%s', $activity));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }
}
