<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\Form\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\{
    EmailType,
    PercentType,
};

class StaffMemberAdmin extends AbstractAdmin
{
    public $supportsPreviewMode = true;

    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
            ->add('email')
            ->add('isActive', null, [
                'label' => 'Active',
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
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
            ->add('isActive', null, [
                'label' => 'Active',
            ])
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->with('Main', [
                'class' => 'col-md-4'
            ])
                ->add('username')
                ->add('firstName')
                ->add('lastName')
                ->add('homeProgram')
                ->add('email', EmailType::class)
                ->add('isActive', null, [
                    'label' => 'Active',
                ])
            ->end()
        ;

        // roles can be added only to an existing StaffMember
        if ($this->getSubject()->getId()) {
            $form
                ->with('Roles', [
                    'class' => 'col-md-8'
                ])
                    ->add('staffRoles', CollectionType::class, [
                        'by_reference' => false,
                    ], [
                        'edit' => 'inline',
                        'inline' => 'table',

                    ])
                    ->add('totalStaffRolesPercent', PercentType::class, [
                        'required' => false,
                        'disabled' => true,
                        'type' => 'fractional',
                        'scale' => 2
                    ])
                ->end()
            ;
        }
    }

    protected function configureShowFields(ShowMapper $show)
    {
        $show
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
            ->add('email')
            ->add('isActive', null, [
                'label' => 'Active',
            ])
            ->add('totalStaffRolesPercent', 'percent')
        ;
    }
}
