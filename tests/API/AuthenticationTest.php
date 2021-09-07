<?php

namespace App\Tests\API;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use App\DataFixtures\Test\UserFixtures;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;

class AuthenticationTest extends ApiTestCase
{
    public function testLogin()
    {
        $client = static::createClient();

        $databaseTool = $client->getContainer()->get(DatabaseToolCollection::class)->get();
        $fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
        ])->getReferenceRepository();


        $response = $client->request('POST', '/authentication_token', [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'username' => $fixtures->getReference('api_user')->getUsername(),
                'password' => UserFixtures::PASSWORD,
            ],
        ]);

        $json = json_decode($response->getContent(), true);
        $this->assertResponseIsSuccessful();
        $this->assertArrayHasKey('token', $json);
    }
}