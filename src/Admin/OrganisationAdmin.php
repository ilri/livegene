<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelListType;
use Sonata\AdminBundle\Show\ShowMapper;

class OrganisationAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('shortName')
            ->add('fullName')
            ->add('logoUrl', null, [
                'label' => 'Logo',
                'sortable' => false,
                'template' => 'SonataAdmin/CRUD/Organisation/list_logo.html.twig'
            ])
            ->add('country', null, [
                'sortable' => true,
                'sort_field_mapping' => ['fieldName' => 'country'],
                'sort_parent_association_mappings' => [
                    ['fieldName' => 'country']
                ]
            ])
            ->add('_action', 'actions', [
                'actions' => [
                    'show' => [],
                    'edit' => [],
                ]
            ])
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $filter)
    {
        $filter
            ->add('shortName')
            ->add('fullName')
            ->add('country')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        $organisation = $this->getSubject();

        $fileFieldOptions = [
            'label' => 'Logo URL',
            'required' => false,
            'empty_data' => '',
        ];
        if ($organisation && ($webPath = $organisation->getLogoUrl())) {
            $fileFieldOptions['help'] = '<img src="'.$webPath.'" class="admin-preview" />';
        }

        $form
            ->add('shortName', null, [
                'required' => false,
                'empty_data' => '',
            ])
            ->add('fullName')
            ->add('localName', null, [
                'required' => false,
                'empty_data' => '',
            ])
            ->add('link', null, [
                'required' => false,
                'empty_data' => '',
                'help' => 'Website address of the organisation',
            ])
            ->add('logoUrl', null, $fileFieldOptions)
            ->add('country', ModelListType::class)
        ;
    }

    protected function configureShowFields(ShowMapper $show)
    {
        $show
            ->add('shortName')
            ->add('fullName')
            ->add('localName')
            ->add('link', null, [
                'template' => 'SonataAdmin/CRUD/Organisation/show_link.html.twig'
            ])
            ->add('logoUrl', null,  [
                'label' => 'Logo URL'
            ])
            ->add('encodedLogo', null, [
                'label' => 'Logo',
                'template' => 'SonataAdmin/CRUD/Organisation/show_logo.html.twig'
            ])
            ->add('logoStatus')
            ->add('country')
        ;
    }
}
