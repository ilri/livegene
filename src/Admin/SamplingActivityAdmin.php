<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    ListMapper,
    DatagridMapper
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Form\Type\{
    ModelType,
    ModelListType
};
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Sonata\Form\Type\DatePickerType;
use Sonata\DoctrineORMAdminBundle\Filter\DateRangeFilter;
use Sonata\Form\Type\{
    DateRangePickerType,
    CollectionType
};

class SamplingActivityAdmin extends AbstractAdmin
{
    //protected function configureSideMenu(MenuItemInterface $menu, $action, AdminInterface $childAdmin = null)
    //{
    //    if (!$childAdmin && !in_array($action, ['edit', 'show'])) {
    //        return;
    //    }

    //    $admin = $this->isChild() ? $this->getParent() : $this;
    //    $id = $admin->getRequest()->get('id');

    //    $menu->addChild('View Sampling Activity', [
    //        'uri' => $admin->generateUrl('show', ['id' => $id])
    //    ]);

    //    if ($this->isGranted('EDIT')) {
    //        $menu->addChild('Edit Sampling Activity', [
    //            'uri' => $admin->generateUrl('edit', ['id' => $id])
    //        ]);
    //    }

    //    if ($this->isGranted('LIST')) {
    //        $menu->addChild('Manage Sampling Documentations', [
    //            'uri' => $admin->generateUrl('admin.sampling_documentation.list', ['id' => $id])
    //        ]);
    //    }
    //}

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

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
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


    protected function configureFormFields(FormMapper $formMapper)
    {
	    $formMapper
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
            $formMapper
                ->add('samplingDocumentations', CollectionType::class, [
                    'by_reference' => false,
                ], [
                    'edit' => 'inline',
                    'inline' => 'table',
                ])
            ;
        }
    }
    
    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
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
