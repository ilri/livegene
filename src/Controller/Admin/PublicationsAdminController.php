<?php

namespace App\Controller\Admin;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sonata\AdminBundle\Admin\Pool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Cache\CacheInterface;

class PublicationsAdminController extends AbstractController
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
     * @Route("/admin/publications", name="publications_admin")
     * @Template("SonataAdmin/Block/publications.html.twig")
     *
     * @param   Pool  $pool
     *
     * @return array
     */
    public function indexAction(Pool $pool): array
    {
        $response = $this->getMendeleyPublications();

        return [
            'admin_pool' => $pool,
            'publications' => json_decode($response),
        ];
    }

    /**
     * @return string
     */
    private function getMendeleyPublications(): string
    {
        $accessToken = $this->cache->getItem('mendeley_access_token')->get();
        dump($accessToken);

        $response = '[]';
        if ($accessToken) {
            $baseUri = 'https://api.mendeley.com/documents';
            $client = new Client();
            try {
                $response = $client->request('GET', $baseUri, [
                    'query' => [
                        'group_id' => '98b5aad2-ab5b-3406-8c13-f564adb01f63',
                        'limit' => 500,
                        'order' => 'desc',
                    ],
                    'headers' => [
                        'Authorization' => 'Bearer '.$accessToken,
                    ]
                ])->getBody()->getContents();
            } catch (GuzzleException $e) {
                $this->get('session')->getFlashBag()->add('mendeley_error_message', $e->getMessage());
            }
        }

        return $response;
    }
}
