<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    ListMapper,
    DatagridMapper
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\{
    EmailType,
    PercentType
};
use Sonata\Form\Type\CollectionType;

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
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Main', [
                'class' => 'col-md-4'
            ])
                ->add('username')
                ->add('firstName')
                ->add('lastName')
                ->add('homeProgram')
                ->add('email', EmailType::class)
            ->end()
        ;

        // roles can be added only to an existing StaffMember
        if ($this->getSubject()->getId()) {
            $formMapper
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

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
            ->add('email')
            ->add('totalStaffRolesPercent', 'percent')
        ;
    }
}
