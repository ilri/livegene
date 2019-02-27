<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    ListMapper,
    DatagridMapper
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\DateRangeFilter;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Sonata\Form\Type\{
    DateRangePickerType,
    DatePickerType
};
use Sonata\AdminBundle\Form\Type\ModelListType;

class ProjectAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('ilriCode', null, ['label' => 'ILRI code'])
            ->add('shortName')
            ->add('fullName', null, [
                'header_style' => 'width: 35%',
                'template' => 'SonataAdmin/CRUD/Project/list_full_name.html.twig'
            ])
            ->add('team')
            ->add('isActive', 'boolean')
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
            ->add('ilriCode', null, [
                'label' => 'ILRI code'
            ])
            ->add('shortName')
            ->add('fullName')    
            ->add('team')
            ->add('donor')
            ->add('startDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('endDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('status')
            ->add('capacityDevelopment')
            ->add('totalProjectValue')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->tab('Main')
                ->with('Project description', ['class' => 'col-md-8'])
                    ->add('ilriCode', null, [
                        'label' => 'ILRI code'
                    ])
                    ->add('fullName')
                    ->add('shortName')
                    ->add('principalInvestigator', ModelListType::class)
                    ->add('team')
                ->end()
                ->with('Project duration', ['class' => 'col-md-4'])
                    ->add('startDate', DatePickerType::class, [
                        'dp_pick_time' => false,
                        'format' => DateType::HTML5_FORMAT
                    ])
                    ->add('endDate', DatePickerType::class, [
                        'dp_pick_time' => false,
                        'format' => DateType::HTML5_FORMAT
                    ])
                ->end()
                ->with('Project features', ['class' => 'col-md-4'])
                    ->add('status', null, [
                        'attr' => [
                            'min' => 0,
                            'max' => 100,
                        ]
                    ])
                    ->add('capacityDevelopment', null, [
                        'attr' => [
                            'min' => 0,
                            'max' => 100,
                        ]
                    ])
                ->end()
            ->end()
            ->tab('Award')
                ->with('Donor information', ['class' => 'col-md-8'])
                    ->add('donor', ModelListType::class)
                    ->add('donorReference', null, [
                        'required' => false,
                        'empty_data' => ''
                    ])
                    ->add('donorProjectName', null, [
                        'required' => false,
                        'empty_data' => ''
                    ])
                ->end()
                ->with('Project value', ['class' => 'col-md-4'])
                    ->add('totalProjectValue', null, [
                        'attr' => [
                            'min' => 1
                        ]
                    ])
                    ->add('totalIlriValue', null, [
                        'label' => 'Total ILRI value',
                        'attr' => [
                            'min' => 1
                        ]
                    ])
                    ->add('totalLivegeneValue', null, [
                        'attr' => [
                            'min' => 1
                        ]
                    ])
                ->end()
            ->end()
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->with('Main', ['class' => 'col-md-6'])
                ->add('ilriCode', null, [
                    'label' => 'ILRI code'
                ])
                ->add('fullName')
                ->add('shortName')
                ->add('principalInvestigator')
                ->add('team')
                ->add('startDate')
                ->add('endDate')
                ->add('isActive', 'boolean')
                ->add('status')
                ->add('capacityDevelopment')
            ->end()
            ->with('Award', ['class' => 'col-md-6'])
                ->add('donor')
                ->add('donorReference')
                ->add('donorProjectName')
                ->add('totalProjectValue')
                ->add('totalIlriValue', null, [
                    'label' => 'Total ILRI value'
                ])
                ->add('totalLivegeneValue')
            ->end()
        ;
    }
}
