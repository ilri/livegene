<?php

namespace App\Helper;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\OAuth2ClientInterface;
use League\OAuth2\Client\Token\AccessToken;
use Psr\Cache\InvalidArgumentException;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Contracts\Cache\CacheInterface;

class MendeleyHelper
{
    private CacheInterface $cache;
    private OAuth2ClientInterface $client;
    private SessionInterface $session;

    /**
     * @param   CacheInterface  $cache
     * @param   ClientRegistry  $clientRegistry
     * @param   SessionInterface         $session
     */
    public function __construct(CacheInterface $cache, ClientRegistry $clientRegistry, SessionInterface $session)
    {
        $this->cache = $cache;
        $this->client = $clientRegistry->getClient('mendeley');
        $this->session = $session;
    }

    /**
     * @return AccessToken
     * @throws InvalidArgumentException
     */
    public function getAccessToken(): AccessToken
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
        return $accessToken;
    }

    /**
     * @return array
     */
    public function getPublications(): array
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
                    'Accept' => 'application/vnd.mendeley-document.1+json'
                ],
            ])->getBody();
        } catch (InvalidArgumentException | GuzzleException $e) {
            $this->session->getFlashBag()->add(
                'mendeley_error_message',
                $e->getMessage()
            );
        }

        return json_decode($response, true);
    }
}
