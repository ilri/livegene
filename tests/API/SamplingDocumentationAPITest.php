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

class SamplingDocumentationAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\SamplingDocumentationFixtures',
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
        $response = $this->client->request('GET', '/api/sampling_documentations');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/SamplingDocumentation',
                '@id' => '/api/sampling_documentations',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        '@id' => '/api/sampling_documentations/1',
                        '@type' => 'SamplingDocumentation',
                        'id' => 1,
                        'samplingActivity' => '/api/sampling_activities/1',
                        'samplingDocumentType' => '/api/sampling_document_types/1',
                        'document' => '/media/download/1',
                        'startDate' => '2021-01-01T00:00:00+00:00',
                        'endDate' => '2021-12-31T00:00:00+00:00',
                        'isActive' => true,
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        //$this->assertMatchesResourceCollectionJsonSchema(SamplingDocumentation::class);
    }

    public function testGetItemIsAvailable(): void
    {
        $documentation = $this->getSamplingDocumentation();
        $this->client->request('GET', sprintf('/api/sampling_documentations/%s', $documentation));
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(
            [
                '@id' => '/api/sampling_documentations/1',
                '@type' => 'SamplingDocumentation',
                'samplingActivity' => '/api/sampling_activities/1',
                'samplingDocumentType' => '/api/sampling_document_types/1',
                'document' => '/media/download/1',
                'startDate' => '2021-01-01T00:00:00+00:00',
                'endDate' => '2021-12-31T00:00:00+00:00',
                'isActive' => true,
            ],
        );
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/sampling_documentations');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testPutIsNotAllowed(): void
    {
        $documentation = $this->getSamplingDocumentation();
        $this->client->request('PUT', sprintf('/api/sampling_documentations/%s', $documentation));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $documentation = $this->getSamplingDocumentation();
        $this->client->request('DELETE', sprintf('/api/sampling_documentations/%s', $documentation));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getSamplingDocumentation(): int
    {
        return $this->fixtures->getReference('documentation')->getId();
    }
}
