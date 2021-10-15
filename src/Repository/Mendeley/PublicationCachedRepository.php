<?php

namespace App\Repository\Mendeley;

use App\Exception\CacheItemNotFoundException;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Contracts\Cache\CacheInterface;

class PublicationCachedRepository
{
    private CacheInterface $cache;
    private PublicationRepository $publicationRepository;
    private string $projectDir;

    /**
     * @param   CacheInterface         $cache
     * @param   PublicationRepository  $publicationRepository
     * @param   string                 $projectDir
     */
    public function __construct(CacheInterface $cache, PublicationRepository $publicationRepository, string $projectDir)
    {
        $this->cache = $cache;
        $this->publicationRepository = $publicationRepository;
        $this->projectDir = $projectDir;
    }

    /**
     * @return array
     * @throws GuzzleException
     * @throws CacheItemNotFoundException
     */
    public function getPublications(): array
    {
        $publications = $this->cache->getItem('mendeley_publications');

        if (!$publications->isHit()) {
            $this->setPublications();
        }

        return $publications->get() ?: [];
    }

    /**
     * Fetch the publications from the Mendeley API endpoint /documents
     * and store them in the cache item 'mendeley_publications'.
     * Write the publications into a JSON file.
     *
     * @throws GuzzleException
     * @throws CacheItemNotFoundException
     */
    public function setPublications()
    {
        $publications = $this->cache->getItem('mendeley_publications');
        $response = $this->publicationRepository->getPublications();
        $publications->set($response);
        $this->cache->save($publications);
        file_put_contents(
            $this->projectDir.'/assets/spa/data/publications.json',
            json_encode($publications, JSON_PRETTY_PRINT)
        );
    }

    /**
     * @param   string  $id
     *
     * @return array
     * @throws CacheItemNotFoundException
     */
    public function getPublication(string $id): array
    {
        $publications = $this->cache->getItem('mendeley_publications');
        if (!$publications->isHit()) {
            throw new CacheItemNotFoundException('Mendeley publications were not found in cache.');
        }

        $list = $publications->get();
        $index = array_search($id, array_column($publications->get(), 'id'));
        return $list[$index];
    }
}
