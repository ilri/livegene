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
use Sonata\DoctrineORMAdminBundle\Filter\DateRangeFilter;
use Sonata\Form\Type\{
    CollectionType,
    DateRangePickerType,
};
use Sonata\Form\Type\DatePickerType;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class SamplingActivityAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('project')
            ->add('samplingPartners')
            ->add('animalSpecies')
            ->add('countries')
            ->add('description')
            ->add('startDate')
            ->add('endDate')
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
            ->add('samplingPartners')
            ->add('animalSpecies')
            ->add('countries')
            ->add('description')
            ->add('startDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('endDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('samplingDocumentations.samplingDocumentType', null, [
                'label' => 'Sampling document type'
            ])
        ;
    }


    protected function configureFormFields(FormMapper $form)
    {
	    $form
            ->add('project', ModelListType::class)
            ->add('samplingPartners', ModelType::class, [
                'multiple' => true,
                'required' => true,
                'btn_add' => false,
            ])
            ->add('animalSpecies', ModelType::class, [
                'multiple' => true,
                'required' => true,
            ])
            ->add('countries', ModelType::class, [
                'multiple' => true,
                'required' => true,
            ])
            ->add('description')
            ->add('startDate', DatePickerType::class, [
                'format' => DateType::HTML5_FORMAT,
            ])
            ->add('endDate', DatePickerType::class, [
                'format' => DateType::HTML5_FORMAT,
            ])
        ;

        if ($this->subject->getId()) {
            $form
                ->add('samplingDocumentations', CollectionType::class, [
                    'by_reference' => false,
                ], [
                    'edit' => 'inline',
                    'inline' => 'table',
                ])
            ;
        }
    }

    protected function configureShowFields(ShowMapper $show)
    {
        $show
            ->add('id')
            ->add('project')
            ->add('samplingPartners')
            ->add('animalSpecies')
            ->add('countries')
            ->add('description')
            ->add('startDate')
            ->add('endDate')
            ->add('samplingDocumentations')
        ;
    }
}
