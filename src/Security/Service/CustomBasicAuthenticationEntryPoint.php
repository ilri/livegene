<?php

namespace App\Security\Service;

use Symfony\Component\HttpFoundation\{
    Request,
    Response
};
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

/**
 * CustomBasicAuthenticationEntryPoint starts an HTTP Basic authentication.
 *
 * Set custom WWW-Authenticate header when an AJAX request is made.
 *
 * @author Cezar Pendarovski <cezar.pendarovski@roslin.ed.ac.uk>
 */
class CustomBasicAuthenticationEntryPoint implements AuthenticationEntryPointInterface
{
    private string $realmName;

    public function __construct(string $realmName)
    {
        $this->realmName = $realmName;
    }

    /**
     * {@inheritdoc}
     */
    public function start(Request $request, AuthenticationException $authException = null): Response
    {
        $response = new Response();
        if ($request->headers->get('x-requested-with') == 'XMLHttpRequest') {
            $response->headers->set('WWW-Authenticate', 'AJAX');
        } else {
            $response->headers->set('WWW-Authenticate', sprintf('Basic realm="%s"', $this->realmName));
        }
        $response->setStatusCode(401);
        return $response;
    }
}
