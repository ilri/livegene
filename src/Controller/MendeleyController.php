<?php

namespace App\Controller;

use App\Repository\Mendeley\AccessTokenCachedRepository;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;

class MendeleyController extends AbstractController
{
    private AccessTokenCachedRepository $accessTokenRepository;

    /**
     * @param   AccessTokenCachedRepository  $accessTokenRepository
     */
    public function __construct(AccessTokenCachedRepository $accessTokenRepository)
    {
        $this->accessTokenRepository= $accessTokenRepository;
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
     * @return RedirectResponse
     */
    public function connectCheckAction(): RedirectResponse
    {
        try {
            $this->accessTokenRepository->setAccessToken();
        } catch (IdentityProviderException $e) {
            $this->get('session')->getFlashBag()->add('sonata_flash_error', $e->getMessage());
        }

        return $this->redirectToRoute('admin_publication_list');
    }
}
