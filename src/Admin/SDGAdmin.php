<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\{
    ColorType,
    UrlType,
};

class SDGAdmin extends AbstractAdmin
{
    protected $classnameLabel = 'Sustainable Development Goal';

    protected function configureListFields(ListMapper $list)
    {
        if ($this->hasRequest()) {
            if ($mode = $this->request->query->get('_list_mode')) {
                $this->setListMode($mode);
            } else {
                $this->setListMode('mosaic');
            }
        }

        $list->addIdentifier('id')
            ->add('headline')
            ->add('color', null, [
                'template' => 'SonataAdmin/CRUD/SDG/list_color.html.twig'
            ])
            ->add('_action', 'actions', [
                'actions' => [
                    'show' => [],
                    'edit' => [],
                ]
            ])
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('headline');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $sdg = $this->getSubject();

        $fileFieldOptions = ['required' => true];
        if ($sdg && ($webPath = $sdg->getLogoUrl())) {
            $fileFieldOptions['help'] = '<img src="'.$webPath.'" class="admin-preview" />';
        }

        $formMapper
            ->add('headline')
            ->add('fullName')
            ->add('color', ColorType::class)
            ->add('link', UrlType::class)
            ->add('logoUrl', null, $fileFieldOptions)
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('headline')
            ->add('fullName')
            ->add('color', null, [
                'template' => 'SonataAdmin/CRUD/SDG/show_color.html.twig'
            ])
            ->add('link', null, [
                'template' => 'SonataAdmin/CRUD/SDG/show_link.html.twig'
            ])
            ->add('logoUrl', null, [
                'label' => 'Logo',
                'template' => 'SonataAdmin/CRUD/SDG/show_logo.html.twig'
            ])
        ;
    }
}
