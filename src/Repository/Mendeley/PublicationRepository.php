<?php

namespace App\Repository\Mendeley;

use App\Exception\CacheItemNotFoundException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class PublicationRepository
{
    private const API_ENDPOINT = 'https://api.mendeley.com/documents';
    private const LIVEGENESHARE_GROUP_ID = '98b5aad2-ab5b-3406-8c13-f564adb01f63';

    private AccessTokenCachedRepository $accessTokenCachedRepository;

    /**
     * @param   AccessTokenCachedRepository  $accessTokenCachedRepository
     */
    public function __construct(AccessTokenCachedRepository $accessTokenCachedRepository)
    {
        $this->accessTokenCachedRepository = $accessTokenCachedRepository;
    }

    /**
     * @return array
     * @throws CacheItemNotFoundException
     * @throws GuzzleException
     */
    public function getPublications(): array
    {
        $client = new Client();

        $accessToken = $this->accessTokenCachedRepository->getAccessToken();
        $response    = $client->request('GET', self::API_ENDPOINT, [
            'query'   => [
                'group_id' => self::LIVEGENESHARE_GROUP_ID,
                'limit'    => 500,
                'order'    => 'desc',
                'view'     => 'all',
            ],
            'headers' => [
                'Authorization' => 'Bearer '.$accessToken,
                'Accept'        => 'application/vnd.mendeley-document.1+json',
            ],
        ])->getBody();

        return json_decode($response, true);
    }
}
