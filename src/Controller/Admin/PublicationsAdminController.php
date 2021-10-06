<?php

namespace App\Controller\Admin;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\OAuth2ClientInterface;
use League\OAuth2\Client\Token\AccessToken;
use Psr\Cache\InvalidArgumentException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sonata\AdminBundle\Admin\Pool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Cache\CacheInterface;

class PublicationsAdminController extends AbstractController
{
    private CacheInterface $cache;
    private OAuth2ClientInterface $client;

    /**
     * @param   CacheInterface  $cache
     * @param   ClientRegistry  $clientRegistry
     */
    public function __construct(CacheInterface $cache, ClientRegistry $clientRegistry)
    {
        $this->cache  = $cache;
        $this->client = $clientRegistry->getClient('mendeley');
    }

    /**
     * @Route("/admin/publications", name="publications_admin")
     * @Template("SonataAdmin/Block/publications.html.twig")
     *
     * @param   Pool  $pool
     *
     * @return array
     */
    public function indexAction(Pool $pool): array
    {
        $response = $this->getMendeleyPublications();

        return [
            'admin_pool'   => $pool,
            'publications' => json_decode($response),
        ];
    }

    /**
     * @Route("/admin/publications/{id}", name="publication_admin")
     * @Template("SonataAdmin/Block/publication.html.twig")
     *
     * @param   Pool     $pool
     * @param   Request  $request
     *
     * @return array
     */
    public function showAction(Pool $pool, Request $request): array
    {
        $publication = $request->query->get('publication');

        return [
            'admin_pool' => $pool,
            'publication' => $publication,
        ];
    }

    /**
     * @return string
     */
    private function getMendeleyPublications(): string
    {
        $baseUri = 'https://api.mendeley.com/documents';
        $client  = new Client();
        $response = '[]';
        try {
            $accessToken = $this->getAccessToken();
            $response = $client->request('GET', $baseUri, [
                'query'   => [
                    'group_id' => '98b5aad2-ab5b-3406-8c13-f564adb01f63',
                    'limit'    => 500,
                    'order'    => 'desc',
                ],
                'headers' => [
                    'Authorization' => 'Bearer '.$accessToken,
                ],
            ])->getBody()->getContents();
        } catch (InvalidArgumentException | GuzzleException $e) {
            $this->get('session')->getFlashBag()->add(
                'mendeley_error_message',
                $e->getMessage()
            );
        }

        return $response;
    }

    /**
     * @return AccessToken
     * @throws InvalidArgumentException
     */
    private function getAccessToken(): AccessToken
    {
        /** @var AccessToken $accessToken */
        $accessToken = $this->cache->getItem('mendeley_access_token')->get();
        if ($accessToken->hasExpired()) {
            $accessToken = $this->client->refreshAccessToken(
                $accessToken->getRefreshToken()
            );
            $this->cache->delete('mendeley_access_token');
            $accessToken = $this->cache->get(
                'mendeley_access_token',
                function () use ($accessToken) {
                    return $accessToken;
                }
            );
        }
        dump(date('Y-m-d H:i:s', $accessToken->getExpires()));
        return $accessToken;
    }
}
