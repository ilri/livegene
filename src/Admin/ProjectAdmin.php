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
use Symfony\Component\Form\Extension\Core\Type\{
    DateType,
    PercentType,
    MoneyType,
    TextareaType,
    CollectionType as SymfonyCollectionType,
    UrlType
};
use Sonata\Form\Type\{
    DateRangePickerType,
    DatePickerType,
    CollectionType as SonataCollectionType
};
use Sonata\AdminBundle\Form\Type\ModelListType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

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
                    ->add('donorReports', SymfonyCollectionType::class, [
                        'allow_add' => true,
                        'allow_delete' => true,
                        'entry_type' => UrlType::class,
                        'required' => false
                    ])
                ->end()
                ->with('Project value', ['class' => 'col-md-4'])
                    ->add('totalProjectValue', MoneyType::class, [
                        'currency' => 'USD',
                        'grouping' => true,
                        'scale' => 0,
                    ])
                    ->add('totalIlriValue', MoneyType::class, [
                        'label' => 'Total ILRI value',
                        'currency' => 'USD',
                        'grouping' => true,
                        'scale' => 0,
                    ])
                    ->add('totalLivegeneValue', MoneyType::class, [
                        'currency' => 'USD',
                        'grouping' => true,
                        'scale' => 0,
                    ])
                ->end()
            ->end()
            ->tab('Proposal')
                ->with('Proposal', ['class' => 'col-md-8'])
                    ->add('proposalLink', null, [
                        'required' => false,
                        'empty_data' => '',
                        'help' => 'Provide the link to the file with the full proposal.',
                    ])
                    ->add('abstract', CKEditorType::class, [
                        'required' => false,
                        'empty_data' => '',
                        'help' => 'Provide the text of the abstract of the proposal. Maximum 1000 characters are allowed.',
                        'attr' => ['rows' => 20, 'cols' => 60],
                    ])
                ->end()
            ->end()
        ;

        if ($this->subject->getId()) {
            $formMapper
                ->tab('Roles')
                    ->with('Country roles', [
                        'class' => 'col-md-6'
                    ])
                        ->add('totalCountryRolesPercent', PercentType::class, [
                            'label' => 'Total country roles percent',
                            'required' => false, 
                            'disabled' => true,
                            'type' => 'fractional',
                            'scale' => 2
                        ])
                        ->add('countryRoles', SonataCollectionType::class, [
                            'label' => 'Country roles',
                            'by_reference' => false,
                        ], [
                            'edit' => 'inline',
                            'inline' => 'table',
                        ])
                    ->end()
                    ->with('SDG roles', [
                        'class' => 'col-md-6'
                    ], [
                    ])
                        ->add('totalSDGRolesPercent', PercentType::class, [
                            'label' => 'Total SDG roles percent',
                            'required' => false,
                            'disabled' => true,
                            'type' => 'fractional',
                            'scale' => 2
                        ])
                        ->add('sdgRoles', SonataCollectionType::class, [
                            'label' => 'SDG roles',
                            'by_reference' => false,
                        ], [
                            'edit' => 'inline',
                            'inline' => 'table',
                        ])
                    ->end()
                ->end()
            ;
        }
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
                ->add('isActiveThisYear','boolean')
                ->add('status')
                ->add('capacityDevelopment')
            ->end()
            ->with('Award', ['class' => 'col-md-6'])
                ->add('donor')
                ->add('donorReference')
                ->add('donorProjectName')
                ->add('donorReports', 'array', [
                    'template' => 'SonataAdmin/CRUD/Project/show_donor_reports.html.twig'
                ])
                ->add('totalProjectValue', 'currency', [
                    'currency' => '$',
                ])
                ->add('totalIlriValue', 'currency', [
                    'label' => 'Total ILRI value',
                    'currency' => '$',
                ])
                ->add('totalLivegeneValue', 'currency', [
                    'currency' => '$',
                ])
            ->end()
            ->with('Proposal',['class' => 'col-md-6'])
                ->add('proposalLink')
                ->add('abstract', 'html')
            ->end()
        ;
    }
}
