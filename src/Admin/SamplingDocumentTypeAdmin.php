<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;

class SamplingDocumentTypeAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('shortName')
            ->add('longName')
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
            ->add('longName')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
	    $form
            ->add('shortName')
            ->add('longName')
        ;
    }

    protected function configureShowFields(ShowMapper $show)
    {
        $show
            ->add('shortName')
            ->add('longName')
        ;
    }
}
