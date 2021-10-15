<?php

namespace App\Repository\Mendeley;

use App\Exception\CacheItemNotFoundException;
use KnpU\OAuth2ClientBundle\Client\{
    ClientRegistry,
    OAuth2ClientInterface,
};
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use League\OAuth2\Client\Token\AccessToken;
use Symfony\Contracts\Cache\CacheInterface;

class AccessTokenCachedRepository
{
    private CacheInterface $cache;
    private OAuth2ClientInterface $client;

    /**
     * @param   CacheInterface  $cache
     * @param   ClientRegistry  $clientRegistry
     */
    public function __construct(CacheInterface $cache, ClientRegistry $clientRegistry)
    {
        $this->cache = $cache;
        $this->client = $clientRegistry->getClient('mendeley');
    }

    /**
     * @return AccessToken
     * @throws CacheItemNotFoundException
     */
    public function getAccessToken(): AccessToken
    {
        $accessToken = $this->cache->getItem('mendeley_access_token');

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

        return $accessToken->get();
    }

    /**
     * @throws IdentityProviderException
     */
    public function setAccessToken(): void
    {
        $accessToken = $this->cache->getItem('mendeley_access_token');
        $accessToken->set($this->client->getAccessToken());
        $this->cache->save($accessToken);
    }
}
