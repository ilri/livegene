<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;

class ContactAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('title')
            ->add('firstName')
            ->add('lastName')
            ->add('email')
            ->add('phone')
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
            ->add('firstName')
            ->add('lastName')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('title', null, [
                'required' => false,
                'empty_data' => '',

            ])
            ->add('firstName')
            ->add('lastName')
            ->add('email', null, [
                'required' => false,
                'empty_data' => '',
            ])
            ->add('phone', null, [
                'required' => false,
                'empty_data' => '',
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('title')
            ->add('firstName')
	        ->add('lastName')
	        ->add('email')
	        ->add('phone')
            ->add('partnerships')
        ;
    }
}
