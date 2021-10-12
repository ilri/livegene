<?php

namespace App\Helper;

use App\Exception\CacheItemNotFoundException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\OAuth2ClientInterface;
use League\OAuth2\Client\Token\AccessToken;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Contracts\Cache\CacheInterface;

class MendeleyHelper
{
    private const API_ENDPOINT = 'https://api.mendeley.com/documents';

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
     * @throws CacheItemNotFoundException
     */
    public function getAccessToken(): AccessToken
    {
        $accessToken = $this->cache->getItem('mendeley_access_token');
        dump($accessToken);
        if (!$accessToken->isHit()) {
            throw new CacheItemNotFoundException('Mendeley Access Token was not found.');
        }
        if ($accessToken->get()->hasExpired()) {
            $accessToken->set(
                $this->client->refreshAccessToken(
                    $accessToken->get()->getRefreshToken()
                )
            );
            $this->cache->save($accessToken);
        }
        dump($accessToken);
        return $accessToken->get();
    }

    /**
     * @return array
     */
    public function getPublications(): array
    {
        $client  = new Client();
        $response = '[]';
        try {
            $accessToken = $this->getAccessToken();
            $response = $client->request('GET', self::API_ENDPOINT, [
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
        } catch (CacheItemNotFoundException | GuzzleException $e) {
            $this->session->getFlashBag()->add(
                'mendeley_error_message',
                $e->getMessage()
            );
        }

        $this->setPublications(json_decode($response, true));

        return json_decode($response, true);
    }

    /**
     * @param   array  $response
     */
    public function setPublications(array $response)
    {
        $publications = $this->cache->getItem('mendeley_publications');
        if (!$publications->isHit()) {
            $publications->set($response);
            $this->cache->save($publications);
        }
    }

    /**
     * @param   string  $id
     *
     * @return mixed
     * @throws CacheItemNotFoundException
     */
    public function getPublication(string $id)
    {
        $publications = $this->cache->getItem('mendeley_publications');
        if (!$publications->isHit()) {
            throw new CacheItemNotFoundException('Mendeley publications were not found.');
        }
        $list = $publications->get();
        $index = array_search($id, array_column($publications->get(), 'id'));
        return $list[$index];
    }
}
