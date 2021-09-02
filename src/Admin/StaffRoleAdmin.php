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
use Sonata\DoctrineORMAdminBundle\Filter\DateRangeFilter;
use Sonata\Form\Type\{
    DatePickerType,
    DateRangePickerType,
};
use Symfony\Component\Form\Extension\Core\Type\{
    CheckboxType,
    DateType,
    HiddenType,
    PercentType,
};

class StaffRoleAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('project')
            ->add('staffMember')
            ->add('startDate')
            ->add('endDate')
            ->add('isActive', 'boolean')
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
            ->add('staffMember')
            ->add('startDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('endDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $staffRole = $this->getSubject();
        $project = $staffRole->getProject();

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
            ->add('startDate', DatePickerType::class, [
                'required' => false,
                'dp_pick_time' => false,
                'format' => DateType::HTML5_FORMAT,
                'help' => $project ? 'Project start date: '.$project->getStartDate()->format('Y-m-d') : null
            ])
            ->add('endDate', DatePickerType::class, [
                'required' => false,
                'dp_pick_time' => false,
                'format' => DateType::HTML5_FORMAT,
                'help' => $project ? 'Project end date: '.$project->getEndDate()->format('Y-m-d') : null
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
            ->add('staffMember')
            ->add('startDate')
            ->add('endDate')
            ->add('isActive', 'boolean')
            ->add('percent', 'percent')
        ;
    }
}
