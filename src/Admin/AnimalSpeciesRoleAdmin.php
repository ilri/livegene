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
use Symfony\Component\Form\Extension\Core\Type\PercentType;

class AnimalSpeciesRoleAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('project')
            ->add('animalSpecies')
            ->add('percent', 'percent')
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
            ->add('project')
            ->add('animalSpecies')
            ->add('percent')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        if (!$this->hasParentFieldDescription()) {
            $form
                ->add('project', ModelListType::class)
            ;
        }

        $form
            ->add('animalSpecies', ModelListType::class)
            ->add('percent', PercentType::class, [
                'type' => 'fractional',
                'scale' => 2,
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $show)
    {
        $show
            ->add('project')
            ->add('animalSpecies')
            ->add('percent', 'percent')
        ;
    }
}
