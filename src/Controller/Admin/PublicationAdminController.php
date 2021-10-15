<?php

namespace App\Controller\Admin;

use App\Exception\CacheItemNotFoundException;
use App\Repository\Mendeley\PublicationCachedRepository;
use GuzzleHttp\Exception\GuzzleException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sonata\AdminBundle\Admin\Pool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class PublicationAdminController extends AbstractController
{
    private SessionInterface $session;
    private PublicationCachedRepository $publicationCachedRepository;

    public function __construct(
        SessionInterface $session,
        PublicationCachedRepository $publicationCachedRepository
    )
    {
        $this->session = $session;
        $this->publicationCachedRepository = $publicationCachedRepository;
    }

    /**
     * @Route("/admin/publication", name="admin_publication_list")
     * @Template("SonataAdmin/Block/publications.html.twig")
     *
     * @param   Pool  $pool
     *
     * @return array
     */
    public function indexAction(Pool $pool): array
    {
        try {
            $publications = $this->publicationCachedRepository->getPublications();
        } catch (CacheItemNotFoundException | GuzzleException $e) {
            $publications = [];
            $this->session->getFlashBag()->add(
                'mendeley_error_message',
                $e->getMessage()
            );
        }
        $fields = ['Title', 'Year', 'Type', 'Source', 'Action'];

        return [
            'admin_pool'   => $pool,
            'publications' => $publications,
            'fields' => $fields,
        ];
    }

    /**
     * @Route("/admin/publication/{id}", name="admin_publication_show")
     * @Template("SonataAdmin/Block/publication.html.twig")
     *
     * @param   string  $id
     * @param   Pool    $pool
     *
     * @return array
     */
    public function showAction(string $id, Pool $pool): array
    {
        try {
            $publication = $this->publicationCachedRepository->getPublication($id);
        } catch (CacheItemNotFoundException $e) {
            $publication = [];
            $this->session->getFlashBag()->add(
                'mendeley_error_message',
                $e->getMessage()
            );
        }

        return [
            'admin_pool' => $pool,
            'publication' => $publication,
        ];
    }

    /**
     * @Route("/admin/publications/download", name="admin_publication_download")
     *
     * @return RedirectResponse
     */
    public function downloadAction(): RedirectResponse
    {
        try {
            $this->publicationCachedRepository->setPublications();
        } catch (CacheItemNotFoundException| GuzzleException $e) {
            $this->session->getFlashBag()->add(
                'mendeley_error_message',
                $e->getMessage()
            );
        }

        return $this->redirectToRoute('admin_publication_list');
    }
}
