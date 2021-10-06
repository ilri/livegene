<?php

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\OAuth2ClientInterface;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use Psr\Cache\InvalidArgumentException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Cache\CacheInterface;

class MendeleyController extends AbstractController
{
    private CacheInterface $cache;

    /**
     * @param   CacheInterface  $cache
     */
    public function __construct(CacheInterface $cache)
    {
        $this->cache = $cache;
    }

    /**
     * @Route("/connect/mendeley", name="connect_mendeley_start")
     *
     * @param   ClientRegistry  $clientRegistry
     *
     * @return RedirectResponse
     */
    public function connectAction(ClientRegistry $clientRegistry): RedirectResponse
    {
        $client = $clientRegistry->getClient('mendeley');

        return $client->redirect(['all']);
    }

    /**
     * @Route("/connect/mendeley/check", name="connect_mendeley_check")
     *
     * @param   ClientRegistry  $clientRegistry
     *
     * @return RedirectResponse
     */
    public function connectCheckAction(ClientRegistry $clientRegistry): RedirectResponse
    {
        $client = $clientRegistry->getClient('mendeley');

        try {
            $this->cacheAccessToken($client);
        } catch (InvalidArgumentException | IdentityProviderException $e) {
            $this->get('session')->getFlashBag()->add('mendeley_error_message', $e->getMessage());
        }

        return $this->redirectToRoute('publications_admin');
    }

    /**
     * @param   OAuth2ClientInterface  $client
     *
     * @throws InvalidArgumentException
     * @throws IdentityProviderException
     */
    private function cacheAccessToken(OAuth2ClientInterface $client): void
    {
        $accessToken = $client->getAccessToken();
        $this->cache->get('mendeley_access_token', function() use ($accessToken) {
            return $accessToken;
        });
    }
}
