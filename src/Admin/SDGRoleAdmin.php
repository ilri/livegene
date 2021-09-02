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

class SDGRoleAdmin extends AbstractAdmin
{
    protected $classnameLabel = 'Sustainable Development Goal Role';

    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('project')
            ->add('sdg', null, [
                'label' => 'SDG',
            ])
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
            ->add('sdg', null, [
                'label' => 'SDG',
            ])
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
            ->add('sdg', ModelListType::class, [
                'label' => 'SDG',
            ])
            ->add('percent', PercentType::class, [
                'type' => 'fractional',
                'scale' => 2
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('project')
            ->add('sdg', null, [
                'label' => 'SDG',
            ])
            ->add('percent', 'percent')
        ;
    }
}
