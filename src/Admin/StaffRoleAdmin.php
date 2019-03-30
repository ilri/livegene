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
use Symfony\Component\Form\Extension\Core\Type\{
    CheckboxType,
    PercentType,
    HiddenType
};

class StaffRoleAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('id')
            ->add('project')
            ->add('staffMember')
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
            ->add('staffMember')
            ->add('percent')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('project', ModelListType::class, [
                'btn_add' => false,
                'btn_edit' => false,
                'btn_delete' => false,
            ])
            ;

        // get the subject id
        // if it is a new subject the id is null
        $id = $this->id($this->getSubject());

        // if it is an existing subject add the field project.isActive
        // otherwise add a dummy hidden field to keep the table layout
        if (null !== $id) {
            $formMapper
                ->add('project.isActive', CheckboxType::class, [
                    'required' => false,
                    'disabled' => true,
                    'label' => 'Project is active'
                ])
            ;
        } else {
            $formMapper
                ->add('dummy', HiddenType::class, [
                    'mapped' => false,
                    'required' => false,
                    'disabled' => true,
                    'label' => 'Project is active'
                ])
            ;
        }

        // if it is nested within a parent StaffMemberAdmin this field
        // should not be displayed
        if (!$this->hasParentFieldDescription()) {
            $formMapper
                ->add('staffMember', ModelListType::class)
            ;
        }

        $formMapper
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
            ->add('staffMember')
            ->add('percent', 'percent')
        ;
    }
}
