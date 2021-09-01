<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;
use App\Entity\PartnershipType;

class PartnershipTypeAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp(): void
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\PartnershipTypeFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('api_user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];

        $this->client = $this->createAuthenticatedClient($credentials);

        $this->em = self::$container->get('doctrine.orm.entity_manager');
    }

    public function testGetCollectionIsAvailable(): void
    {
        $this->client->request('GET', '/api/partnership_types', [], [], [
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
        $this->assertCount(5, $data);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/partnership_types', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable(): void
    {
        $partnership_type = $this->getPartnershipType();
        $this->client->request('GET', sprintf('/api/partnership_types/%s', $partnership_type), [], [], [
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
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'description' => 'Unspecified',
            ]
        );
    }

    public function testPutIsNotAllowed(): void
    {
        $partnership_type = $this->getPartnershipType();
        $this->client->request('PUT', sprintf('/api/partnership_types/%s', $partnership_type), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed(): void
    {
        $partnership_type = $this->getPartnershipType();
        $this->client->request('DELETE', sprintf('/api/partnership_types/%s', $partnership_type), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getPartnershipType(): int
    {
        return $this->em->getRepository(PartnershipType::class)->findOneByDescription('Unspecified')->getId();
    }
}
