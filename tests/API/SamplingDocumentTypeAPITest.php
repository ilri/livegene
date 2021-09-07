<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\SamplingDocumentType;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class SamplingDocumentTypeAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\SamplingDocumentTypeFixtures',
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
        $response = $this->client->request('GET', '/api/sampling_document_types');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/SamplingDocumentType',
                '@id' => '/api/sampling_document_types',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        'id' => 1,
                        'shortName' => 'ATA',
                        'longName' => 'A test agreement',
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(SamplingDocumentType::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/sampling_document_types');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $doctype = $this->getSamplingDocumentType();
        $this->client->request('GET', sprintf('/api/sampling_document_types/%s', $doctype));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                'id' => 1,
                'shortName' => 'ATA',
                'longName' => 'A test agreement',
            ],
        );
    }

    private function getSamplingDocumentType(): int
    {
        return $this->fixtures->getReference('doctype')->getId();
    }

    public function testPutIsNotAllowed(): void
    {
        $doctype = $this->getSamplingDocumentType();
        $this->client->request('PUT', sprintf('/api/sampling_document_types/%s', $doctype));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $doctype = $this->getSamplingDocumentType();
        $this->client->request('DELETE', sprintf('/api/sampling_document_types/%s', $doctype));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }
}
