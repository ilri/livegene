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
use Symfony\Component\Form\Extension\Core\Type\ColorType;

class OrganisationAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('shortName')
            ->add('fullName')
            ->add('encodedLogo', null, [
                'label' => 'Logo',
                'sortable' => false,
                'template' => 'SonataAdmin/CRUD/Organisation/list_logo.html.twig'
            ])
            ->add('logoStatus')
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

        $bgColor = '#FFFFFF';
        if ($this->subject->getId()) {
            $bgColor = $organisation->getLogoBackgroundColor() ?: '#FFFFFF';
        }

        $fileFieldOptions = [
            'label' => 'Logo URL',
            'required' => false,
            'empty_data' => '',
        ];
        if ($organisation && ($webPath = $organisation->getLogoUrl())) {
            $fileFieldOptions['help'] = '<img src="'.$webPath.'" alt="logo" class="organisation-logo organisation-logo-show-preview" style="background-color:'.$bgColor.';" />';
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
            ->add('logoBackgroundColor', ColorType::class, [
                'help' => 'Choose background color for the logo. For white pictures the recommended value is R: 60 G: 141 B: 188',
                'attr' => [
                    'value' => $bgColor,
                ]
            ])
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
