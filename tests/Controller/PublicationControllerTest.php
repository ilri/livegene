<?php

namespace App\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Component\HttpFoundation\Response;

class PublicationControllerTest extends WebTestCase
{
    private ?KernelBrowser $client = null;

    public function setUp(): void
    {
        $this->client = $this->createClient();
    }

    /**
     * The retrieval of the publications from Mendeley should not be possible
     * without a JSON Web Token.
     *
     * @return void
     */
    public function testAnonymousCannotAccessPublicationList(): void
    {
        $this->client->request('GET', '/api/publications');
        $this->assertResponseStatusCodeSame(Response::HTTP_UNAUTHORIZED);
        $this->assertEquals(
            json_encode(['code' => 401, 'message' => 'JWT Token not found']),
            $this->client->getResponse()->getContent(),
        );
    }

    /**
     * The retrieval of the BibTeX citations from Mendeley should not be possible
     * without a JSON Web Token.
     *
     * @return void
     */
    public function testAnonymousCannotAccessBibTexPublicationList(): void
    {
        $this->client->request('GET', '/api/publications/bib');
        $this->assertResponseStatusCodeSame(Response::HTTP_UNAUTHORIZED);
        $this->assertEquals(
            json_encode(['code' => 401, 'message' => 'JWT Token not found']),
            $this->client->getResponse()->getContent(),
        );
    }

    /**
     * The retrieval of a BibTeX citation from Mendeley should not be possible
     * without a JSON Web Token.
     *
     * @return void
     */
    public function testAnonymousCannotAccessBibTexPublicationDetail(): void
    {
        $this->client->request('GET', '/api/publications/example_id/bib');
        $this->assertResponseStatusCodeSame(Response::HTTP_UNAUTHORIZED);
        $this->assertEquals(
            json_encode(['code' => 401, 'message' => 'JWT Token not found']),
            $this->client->getResponse()->getContent(),
        );
    }
}
