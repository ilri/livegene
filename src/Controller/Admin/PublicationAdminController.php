<?php

namespace App\Controller\Admin;

use App\Helper\MendeleyHelper;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sonata\AdminBundle\Admin\Pool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PublicationAdminController extends AbstractController
{
    private MendeleyHelper $mendeleyHelper;

    public function __construct(MendeleyHelper $mendeleyHelper)
    {
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

        return [
            'admin_pool'   => $pool,
            'publications' => $publications,
        ];
    }

    /**
     * @Route("/admin/publication/{id}", name="admin_publication_show")
     * @Template("SonataAdmin/Block/publication.html.twig")
     *
     * @param   Pool     $pool
     * @param   Request  $request
     *
     * @return array
     */
    public function showAction(Pool $pool, Request $request): array
    {
        $publication = $request->query->get('publication');

        return [
            'admin_pool' => $pool,
            'publication' => $publication,
        ];
    }
}
