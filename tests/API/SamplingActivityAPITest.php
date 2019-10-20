<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class SamplingActivityAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\SamplingActivityFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];

        $this->client = $this->createAuthenticatedClient($credentials);
    }

    public function testGetCollectionIsAvailable()
    {
        $this->client->request('GET', '/api/sampling_activities', [], [], [
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
        $this->client->request('POST', '/api/sampling_activities', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable()
    {
        $activity = $this->getSamplingActivity();
        $this->client->request('GET', sprintf('/api/sampling_activities/%s', $activity), [], [], [
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
        $this->assertArrayHasKey('description', $data);
        $this->assertArrayHasKey('project', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'project' => '/api/projects/1',
                'samplingPartners' => [
                    '/api/organisations/1'
                ],
                'animalSpecies' => [
                    [
                        'id' => 1,
                        'commonName' => 'Cattle',
                        'scientificName' => 'Bos taurus'
                    ]
                ],
                'countries' => [
                    [
                        'id' => 1,
                        'country' => 'GB',
                        'countryName' => 'United Kingdom'
                    ]
                ],
                'description' => 'Sampling activity',
                'startDate' => '2018-01-01T00:00:00+00:00',
                'endDate' => '2019-12-31T00:00:00+00:00'
            ]
        );
    }

    public function testPutIsNotAllowed()
    {
        $activity = $this->getSamplingActivity();
        $this->client->request('PUT', sprintf('/api/sampling_activities/%s', $activity), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
    {
        $activity = $this->getSamplingActivity();
        $this->client->request('DELETE', sprintf('/api/sampling_activities/%s', $activity), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getSamplingActivity()
    {
        return $this->fixtures->getReference('activity')->getId();
    }
}
