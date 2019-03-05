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
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class SDGRoleAdmin extends AbstractAdmin
{
    protected $classnameLabel = 'Sustainable Development Goal Role';

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('id')
            ->add('project')
            ->add('sdg', null, [
                'label' => 'SDG',
            ])
            ->add('percent')
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
            ->add('percent', IntegerType::class, [
                'attr' => [
                    'min' => 0,
                    'max' => 100
                ]
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
            ->add('percent')
        ;
    }
}
