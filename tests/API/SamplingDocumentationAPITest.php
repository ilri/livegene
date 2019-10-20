<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class SamplingDocumentationAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $entityManager;
    private $fixtures = null;
    private $client;

    public function setUp()
    {
        $this->entityManager = $this->getContainer()->get('doctrine')->getManager();
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\SamplingDocumentationFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];

        $this->client = $this->createAuthenticatedClient($credentials);
    }

    public function tearDown(): void
    {
        $media = $this->fixtures->getReference('documentation')->getDocument();
        $this->entityManager->remove($media);
        $this->entityManager->flush();

        parent::tearDown();
    }

    public function testGetCollectionIsAvailable()
    {
        $this->client->request('GET', '/api/sampling_documentations', [], [], [
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
        $this->client->request('POST', '/api/sampling_documentations', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable()
    {
        $documentation = $this->getSamplingDocumentation();
        $this->client->request('GET', sprintf('/api/sampling_documentations/%s', $documentation), [], [], [
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
        $this->assertArrayHasKey('samplingActivity', $data);
        $this->assertArrayHasKey('samplingDocumentType', $data);
        $this->assertArrayHasKey('document', $data);

        $url = $data['document'];
        ob_start();
        $this->client->request('GET', $url);
        ob_end_clean();
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
        $this->assertTrue(
            $this->client->getResponse()->headers->contains(
                'Content-Type',
                'application/pdf'
            )
        );
    }

    public function testPutIsNotAllowed()
    {
        $documentation = $this->getSamplingDocumentation();
        $this->client->request('PUT', sprintf('/api/sampling_documentations/%s', $documentation), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
    {
        $documentation = $this->getSamplingDocumentation();
        $this->client->request('DELETE', sprintf('/api/sampling_documentations/%s', $documentation), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getSamplingDocumentation()
    {
        return $this->fixtures->getReference('documentation')->getId();
    }
}
