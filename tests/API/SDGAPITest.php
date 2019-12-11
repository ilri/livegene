<?php

namespace App\Tests\API;

use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class SDGAPITest extends ApiTestCase
{
    use FixturesTrait;

    private $fixtures = null;
    private $client;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\SDGFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('api_user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];

        $this->client = $this->createAuthenticatedClient($credentials);
    }

    public function testGetCollectionIsAvailable()
    {
        $this->client->request('GET', '/api/sdgs', [], [], [
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
        $this->assertCount(17, $data);
    }

    public function testPostIsNotAllowed()
    {
        $this->client->request('POST', '/api/sdgs', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable()
    {
        $sdg = $this->getSDG();
        $this->client->request('GET', sprintf('/api/sdgs/%s', $sdg), [], [], [
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
        $this->assertArrayHasKey('headline', $data);
        $this->assertArrayHasKey('fullName', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'headline' => 'NO POVERTY',
                'fullName' => 'End poverty in all its forms everywhere',
                'color' => '#E5243B',
                'link' => 'https://sustainabledevelopment.un.org/sdg1',
                'logoUrl' => 'https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-01.jpg'
            ]
        );
    }

    public function testGetItemIsNotAvailable()
    {
        $this->client->request('GET', '/api/sdgs/18', [], [], [
            'HTTP_ACCEPT' => 'application/json'
        ]);
        $this->assertSame(
            Response::HTTP_NOT_FOUND,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testPutIsNotAllowed()
    {
        $sdg = $this->getSDG();
        $this->client->request('PUT', sprintf('/api/sdgs/%s', $sdg), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
    {
        $sdg = $this->getSDG();
        $this->client->request('DELETE', sprintf('/api/sdgs/%s', $sdg), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getSDG()
    {
        return $this->fixtures->getReference('sdg1')->getId();
    }
}
