<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    ListMapper,
    DatagridMapper
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Form\Type\ModelListType;
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

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('project')
            ->add('animalSpecies')
            ->add('percent')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        if (!$this->hasParentFieldDescription()) {
            $formMapper
                ->add('project', ModelListType::class)
            ;
        }

        $formMapper
            ->add('animalSpecies', ModelListType::class)
            ->add('percent', PercentType::class, [
                'type' => 'fractional',
                'scale' => 2,
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('project')
            ->add('animalSpecies')
            ->add('percent', 'percent')
        ;
    }
}
