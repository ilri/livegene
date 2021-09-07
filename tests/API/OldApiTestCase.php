<?php

namespace App\Tests\API;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class OldApiTestCase extends WebTestCase
{

    public function createAuthenticatedClient($credentials): object
    {
        $client = $this->createClient();

        $client->request('POST', '/authentication_token', [], [], [
            'CONTENT_TYPE' => 'application/json'
        ], json_encode($credentials));

        $data = json_decode($client->getResponse()->getContent(), true);

        $client->setServerParameter('HTTP_Authorization', sprintf('Bearer %s', $data['token']));

        return $client;
    }
}
