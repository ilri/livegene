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
    private Client $client;

    /**
     * @param   AccessTokenCachedRepository  $accessTokenCachedRepository
     */
    public function __construct(
        AccessTokenCachedRepository $accessTokenCachedRepository
    ) {
        $this->accessTokenCachedRepository = $accessTokenCachedRepository;
        $this->client                      = new Client();
    }

    /**
     * @return array
     * @throws CacheItemNotFoundException
     * @throws GuzzleException
     */
    public function getPublications(): array
    {
        $accessToken = $this->accessTokenCachedRepository->getAccessToken();

        $response = $this->client->request('GET', self::API_ENDPOINT, [
            'query'   => [
                'view'     => 'all',
                'group_id' => self::LIVEGENESHARE_GROUP_ID,
                'limit'    => 500,
                'order'    => 'desc',
                'sort'     => 'created',
            ],
            'headers' => [
                'Authorization' => 'Bearer '.$accessToken,
                'Accept'        => 'application/vnd.mendeley-document.1+json',
            ],
        ])->getBody();

        return json_decode($response, true);
    }

    /**
     * @param   string  $value
     *
     * @return array
     * @throws CacheItemNotFoundException
     * @throws GuzzleException
     */
    public function getPublicationsModifiedSince(string $value): array
    {
        $accessToken = $this->accessTokenCachedRepository->getAccessToken();

        $response = $this->client->request('GET', self::API_ENDPOINT, [
            'query'   => [
                'group_id' => self::LIVEGENESHARE_GROUP_ID,
                'order'    => 'asc',
                'modified_since' => $value,
            ],
            'headers' => [
                'Authorization' => 'Bearer '.$accessToken,
                'Accept'        => 'application/vnd.mendeley-document.1+json',
            ],
        ])->getBody();

        return json_decode($response, true);
    }

    /**
     * @return string
     * @throws CacheItemNotFoundException
     * @throws GuzzleException
     */
    public function getPublicationsBib(): string
    {
        $accessToken = $this->accessTokenCachedRepository->getAccessToken();

        return $this->client->request('GET', self::API_ENDPOINT, [
            'query'   => [
                'group_id' => self::LIVEGENESHARE_GROUP_ID,
                'limit'    => 500,
                'view'     => 'bib',
            ],
            'headers' => [
                'Authorization' => 'Bearer '.$accessToken,
                'Accept'        => 'application/x-bibtex',
            ],
        ])->getBody();
    }

    /**
     * @param   string  $id
     *
     * @return string
     * @throws CacheItemNotFoundException
     * @throws GuzzleException
     */
    public function getPublicationBib(string $id): string
    {
        $accessToken = $this->accessTokenCachedRepository->getAccessToken();

        return $this->client->request(
            'GET',
            sprintf('%s/%s', self::API_ENDPOINT, $id),
            [
                'query'   => [
                    'view' => 'bib',
                ],
                'headers' => [
                    'Authorization' => 'Bearer '.$accessToken,
                    'Accept'        => 'application/x-bibtex',
                ],
            ]
        )->getBody();
    }
}
