<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\DateRangeFilter;
use Sonata\Form\Type\{
    DatePickerType,
    DateRangePickerType,
    DateTimePickerType,
};
use Symfony\Component\Form\Extension\Core\Type\{
    DateTimeType,
    DateType,
    MoneyType,
};

class ExpenditureAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('ilriCode', null, [
                'label' => 'ILRI code'
            ])
            ->add('name')
            ->add('homeProgram')
            ->add('startDate')
            ->add('endDate')
            ->add('reportDate')
            ->add('totalBudget', 'currency' , [
                'currency' => '$',
            ])
            ->add('amount', 'currency', [
                'currency' => '$',
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
            ->add('ilriCode', null, [
                'label' => 'ILRI code'
            ])
            ->add('name')
            ->add('homeProgram')
            ->add('startDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('endDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('reportDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('totalBudget')
            ->add('amount')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->add('ilriCode', null, [
                'label' => 'ILRI code'
            ])
            ->add('name')
            ->add('homeProgram')
            ->add('startDate', DatePickerType::class, [
                'format' => DateType::HTML5_FORMAT
            ])
            ->add('endDate', DatePickerType::class, [
                'required' => false,
                'format' => DateType::HTML5_FORMAT
            ])
            ->add('reportDate', DateTimePickerType::class, [
                'format' => DateTimeType::HTML5_FORMAT
            ])
            ->add('totalBudget', MoneyType::class, [
                'required' => false,
                'currency' => 'USD',
                'grouping' => true,
                'scale' => 0,
            ])
            ->add('amount', MoneyType::class, [
                'required' => false,
                'currency' => 'USD',
                'grouping' => true,
                'scale' => 0,
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('ilriCode', null, [
                'label' => 'ILRI code'
            ])
            ->add('name')
            ->add('homeProgram')
            ->add('startDate')
            ->add('endDate')
            ->add('reportDate')
            ->add('totalBudget', 'currency', [
                'currency' => '$',
            ])
            ->add('amount', 'currency', [
                'currency' => '$',
            ])
        ;
    }
}
