<?php

namespace App\Tests\API;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class StaffMemberAPITest extends WebTestCase
{
    private $fixtures = null;
    private $client;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\StaffMemberFixtures',
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
        $this->client->request('GET', '/api/staff', [], [], [
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
        $this->client->request('POST', '/api/staff', [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testGetItemIsAvailable()
    {
        $coyote = $this->getStaffMember();
        $this->client->request('GET', sprintf('/api/staff/%s', $coyote), [], [], [
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
        $this->assertArrayHasKey('firstName', $data);
        $this->assertArrayHasKey('lastName', $data);
        $this->assertSame(
            $data,
            [
                'id' => 1,
                'username' => 'coyote',
                'email' => 'coyote@example.com',
                'homeProgram' => 'Cartoon',
                'firstName' => 'Wile E.',
                'lastName' => 'Coyote',
                'totalStaffRolesPercent' => 0
            ]
        );
    }

    public function testPutIsNotAllowed()
    {
        $coyote = $this->getStaffMember();
        $this->client->request('PUT', sprintf('/api/staff/%s', $coyote), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function testDeleteIsNotAllowed()
    {
        $coyote = $this->getStaffMember();
        $this->client->request('DELETE', sprintf('/api/staff/%s', $coyote), [], [], [
            'CONTENT_TYPE' => 'application/json',
        ]);
        $this->assertSame(
            Response::HTTP_METHOD_NOT_ALLOWED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    private function getStaffMember()
    {
        return $this->fixtures->getReference('coyote')->getUsername();
    }
}
