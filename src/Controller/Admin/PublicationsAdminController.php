<?php

namespace App\Controller\Admin;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sonata\AdminBundle\Admin\Pool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PublicationsAdminController extends AbstractController
{
    /**
     * @Route("/admin/publications")
     * @Template("SonataAdmin/Block/publications.html.twig")
     *
     * @param Pool $pool
     * @return array
     */
    public function indexAction(Pool $pool): array
    {
        return [
            'admin_pool' => $pool,
        ];
    }
}