<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\{
    ModelListType,
    ModelType,
};
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\Form\Type\DatePickerType;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class PartnershipAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('project', null, [
                'sortable' => true,
                'sort_field_mapping' => ['fieldName' => 'fullName'],
                'sort_parent_association_mappings' => [
                    ['fieldName' => 'project']
                ]
            ])
            ->add('partner', null, [
                'sortable' => true,
                'sort_field_mapping' => ['fieldName' => 'fullName'],
                'sort_parent_association_mappings' => [
                    ['fieldName' => 'partner']
                ]
            ])
            ->add('startDate')
            ->add('endDate')
            ->add('contacts')
            ->add('partnershipType', null, [
                'sortable' => true,
                'sort_field_mapping' => ['fieldName' => 'description'],
                'sort_parent_association_mappings' => [
                    ['fieldName' => 'partnershipType']
                ]
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
            ->add('project')
            ->add('partner')
            ->add('startDate')
            ->add('endDate')
            ->add('contacts')
            ->add('partnershipType')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->add('project', ModelListType::class)
            ->add('partner', ModelListType::class)
            ->add('startDate', DatePickerType::class, [
                'required' => false,
                'dp_pick_time' => false,
                'format' => DateType::HTML5_FORMAT
            ])
            ->add('endDate', DatePickerType::class, [
                'required' => false,
                'dp_pick_time' => false,
                'format' => DateType::HTML5_FORMAT
            ])
            ->add('contacts', ModelType::class, [
                'multiple' => true
            ])
            ->add('partnershipType', ModelListType::class)
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('project')
            ->add('partner')
            ->add('startDate')
            ->add('endDate')
            ->add('contacts')
            ->add('partnershipType')
        ;
    }
}
