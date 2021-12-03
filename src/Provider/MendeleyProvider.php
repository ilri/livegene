<?php

namespace App\Provider;

use League\OAuth2\Client\Provider\AbstractProvider;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use League\OAuth2\Client\Provider\GenericResourceOwner;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Tool\BearerAuthorizationTrait;
use Psr\Http\Message\ResponseInterface;

class MendeleyProvider extends AbstractProvider
{
    /**
     * @inheritDoc
     */
    public function getBaseAuthorizationUrl(): string
    {
        return 'https://api.mendeley.com/oauth/authorize';
    }

    /**
     * @inheritDoc
     */
    public function getBaseAccessTokenUrl(array $params): string
    {
        return 'https://api.mendeley.com/oauth/token';
    }

    /**
     * @inheritDoc
     */
    public function getResourceOwnerDetailsUrl(AccessToken $token): ?string
    {
        return 'https://api.mendeley.com/profiles/me';
    }

    /**
     * @inheritDoc
     */
    protected function getDefaultScopes(): array
    {
        return ['all'];
    }

    /**
     * @inheritDoc
     */
    protected function checkResponse(ResponseInterface $response, $data): void
    {
        if ($response->getStatusCode() >= 400 || isset($data['error'])) {
            throw new IdentityProviderException(
                $response->getBody(),
                $response->getStatusCode(),
                $data
            );
        }
    }

    /**
     * @inheritDoc
     */
    protected function createResourceOwner(array $response, AccessToken $token): GenericResourceOwner
    {
        return new GenericResourceOwner($response, 'id');
    }
}
