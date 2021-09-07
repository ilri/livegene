<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\{
    ApiTestCase,
    Client,
};
use App\DataFixtures\Test\UserFixtures;
use App\Entity\Expenditure;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\HttpFoundation\Response;

class ExpenditureAPITest extends ApiTestCase
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
                'App\DataFixtures\Test\ExpenditureFixtures',
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
        $response = $this->client->request('GET', '/api/expenditures');
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                '@context' => '/api/contexts/Expenditure',
                '@id' => '/api/expenditures',
                '@type' => 'hydra:Collection',
                'hydra:member' => [
                    [
                        'id' => 1,
                        'ilriCode' => 'ACME001',
                        'name' => 'Looney Tunes',
                        'homeProgram' => 'ACME',
                        'startDate' => '2019-03-01T00:00:00+00:00',
                        'endDate' => '2019-12-31T00:00:00+00:00',
                        'reportDate' => '2019-11-01T12:00:00+00:00',
                        'totalBudget' => 10000,
                        'amount' => null,
                    ],
                ],
                'hydra:totalItems' => 1,
            ]
        );
        $this->assertCount(1, $response->toArray()['hydra:member']);
        $this->assertMatchesResourceCollectionJsonSchema(Expenditure::class);
    }

    public function testPostIsNotAllowed(): void
    {
        $this->client->request('POST', '/api/expenditures');
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testGetItemIsAvailable(): void
    {
        $expenditures = $this->getExpenditures();
        $this->client->request('GET', sprintf('/api/expenditures/%s', $expenditures));
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains(
            [
                'id' => 1,
                'ilriCode' => 'ACME001',
                'name' => 'Looney Tunes',
                'homeProgram' => 'ACME',
                'startDate' => '2019-03-01T00:00:00+00:00',
                'endDate' => '2019-12-31T00:00:00+00:00',
                'reportDate' => '2019-11-01T12:00:00+00:00',
                'totalBudget' => 10000,
                'amount' => null,
            ]
        );
        $this->assertMatchesResourceItemJsonSchema(Expenditure::class);
    }

    public function testPutIsNotAllowed(): void
    {
        $expenditures = $this->getExpenditures();
        $this->client->request('PUT', sprintf('/api/expenditures/%s', $expenditures));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    public function testDeleteIsNotAllowed(): void
    {
        $expenditures = $this->getExpenditures();
        $this->client->request('DELETE', sprintf('/api/expenditures/%s', $expenditures));
        $this->assertResponseStatusCodeSame(Response::HTTP_METHOD_NOT_ALLOWED);
    }

    private function getExpenditures(): int
    {
        return $this->fixtures->getReference('expenditure')->getId();
    }
}
