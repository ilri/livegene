<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    ListMapper,
    DatagridMapper
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\EmailType;

class StaffMemberAdmin extends AbstractAdmin
{
    public $supportsPreviewMode = true;

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('id')
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
            ->add('email')
            ->add('_action', 'actions', array(
                'actions' => array(
                    'show' => array(),
                    'edit' => array(),
                )
        ))
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
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
            ->add('email', EmailType::class)
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('username')
            ->add('firstName')
            ->add('lastName')
            ->add('homeProgram')
            ->add('email')
        ;
    }
}
