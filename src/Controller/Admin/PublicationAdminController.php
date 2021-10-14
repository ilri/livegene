<?php

namespace App\Controller\Admin;

use App\Exception\CacheItemNotFoundException;
use App\Helper\MendeleyHelper;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sonata\AdminBundle\Admin\Pool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class PublicationAdminController extends AbstractController
{
    private SessionInterface $session;
    private MendeleyHelper $mendeleyHelper;

    public function __construct(MendeleyHelper $mendeleyHelper, SessionInterface $session)
    {
        $this->session = $session;
        $this->mendeleyHelper = $mendeleyHelper;
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
        $publications = $this->mendeleyHelper->getPublications();
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
            $publication = $this->mendeleyHelper->getPublication($id);
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
}
