<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;

class AnimalSpeciesAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('commonName')
            ->add('scientificName')
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
            ->add('commonName')
            ->add('scientificName')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->add('commonName')
            ->add('scientificName')
        ;
    }

    protected function configureShowFields(ShowMapper $show)
    {
        $show
            ->add('commonName')
            ->add('scientificName')
        ;
    }
}
