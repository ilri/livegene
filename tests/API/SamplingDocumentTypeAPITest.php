<?php

namespace App\Tests\API;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class SamplingDocumentTypeAPITest extends WebTestCase
{
    private $fixtures = null;
    private $client;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\SamplingDocumentTypeFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];
        $this->client = $this->makeClient($credentials);
    }

    public function testGetCollectionIsAvailable()
    {
        $this->client->request('GET', '/api/sampling_document_types', [], [], [
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
        $this->client->request('POST', '/api/sampling_document_types', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable()
    {
        $doctype = $this->getSamplingDocumentType();
        $this->client->request('GET', sprintf('/api/sampling_document_types/%s', $doctype), [], [], [
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
        $this->assertArrayHasKey('shortName', $data);
        $this->assertArrayHasKey('longName', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'shortName' => 'ATA',
                'longName' => 'A test agreement'
            ]
        );
    }

    public function testPutIsNotAllowed()
    {
        $doctype = $this->getSamplingDocumentType();
        $this->client->request('PUT', sprintf('/api/sampling_document_types/%s', $doctype), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
    {
        $doctype = $this->getSamplingDocumentType();
        $this->client->request('DELETE', sprintf('/api/sampling_document_types/%s', $doctype), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getSamplingDocumentType()
    {
        return $this->fixtures->getReference('doctype')->getId();
    }
}
