<?php

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\OAuth2ClientInterface;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
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
            $this->setAccessToken($client);
        } catch (IdentityProviderException $e) {
            $this->get('session')->getFlashBag()->add('mendeley_error_message', $e->getMessage());
        }

        return $this->redirectToRoute('admin_publication_list');
    }

    /**
     * @param   OAuth2ClientInterface  $client
     *
     * @throws IdentityProviderException
     */
    private function setAccessToken(OAuth2ClientInterface $client): void
    {
        $accessToken = $this->cache->getItem('mendeley_access_token');
        $accessToken->set($client->getAccessToken());
        $this->cache->save($accessToken);
    }
}
