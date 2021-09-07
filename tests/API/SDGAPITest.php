<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\SDG;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;


class SDGAPITest extends ApiTestCase
{
    private Client $client;
    private ReferenceRepository $fixtures;

    public function setUp(): void
    {
        $this->client = static::createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $this->fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\SDGFixtures',
        ])->getReferenceRepository();
        $username = $this->fixtures->getReference('api_user')->getUsername();
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];
        $response = $this->client->request('POST', '/authentication_token', [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => $credentials,
        ]);
        $this->client->setDefaultOptions([
            'auth_bearer' => json_decode($response->getContent(), true)['token'],
        ]);
    }

    public function testGetCollectionIsAvailable(): void
    {
        $response = $this->client->request('GET', '/api/sdgs');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/SDG',
            '@id' => '/api/sdgs',
            '@type' => 'hydra:Collection',
            'hydra:member' => [
                [
                    'id' => 1,
                    'headline' => 'NO POVERTY',
                    'fullName' => 'End poverty in all its forms everywhere',
                    'color' => '#E5243B',
                    'link' => 'https://sustainabledevelopment.un.org/sdg1',
                    'logoUrl' => 'https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-01.jpg'
                ]
            ],
            'hydra:totalItems' => 17,
        ]);
        $this->assertCount(17, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(SDG::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/sdgs');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $sdg = $this->getSDG();
        $this->client->request('GET', sprintf('/api/sdgs/%s', $sdg));
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains([
                'id' => 1,
                'headline' => 'NO POVERTY',
                'fullName' => 'End poverty in all its forms everywhere',
                'color' => '#E5243B',
                'link' => 'https://sustainabledevelopment.un.org/sdg1',
                'logoUrl' => 'https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-01.jpg'
            ]
        );
    }

    public function testGetItemIsNotAvailable(): void
    {
        $this->client->request('GET', '/api/sdgs/18');
        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND);
    }

    public function testPutIsNotAllowed(): void
    {
        $sdg = $this->getSDG();
        $this->client->request('PUT', sprintf('/api/sdgs/%s', $sdg));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $sdg = $this->getSDG();
        $this->client->request('DELETE', sprintf('/api/sdgs/%s', $sdg));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getSDG(): int
    {
        return $this->fixtures->getReference('sdg1')->getId();
    }
}
