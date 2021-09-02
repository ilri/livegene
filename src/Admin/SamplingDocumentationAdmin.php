<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    DatagridMapper,
    ListMapper,
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelListType;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\DateRangeFilter;
use Sonata\Form\Type\{
    DatePickerType,
    DateRangePickerType,
};
use Sonata\MediaBundle\Form\Type\MediaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class SamplingDocumentationAdmin extends AbstractAdmin
{
    protected $parentAssociationMapping = 'samplingActivity';

    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->add('create_multiple');
    }

    public function configureActionButtons($action, $object = null)
    {
        if ($action == 'create_multiple' || $action == 'create') {
            return;
        } else {
            $list = parent::configureActionButtons($action, $object);
        }

        if (\in_array($action, ['tree', 'show', 'edit', 'delete', 'list', 'batch'], true)
            && $this->hasAccess('create')
            && $this->hasRoute('create')
        ) {
            $list['create_multiple']['template'] = 'SonataAdmin/CRUD/SamplingDocumentation/create_multiple_button.html.twig';
        }

        return $list;
    }

    public function getDashboardActions()
    {
        $actions = parent::getDashboardActions();

        if ($this->hasRoute('create') && $this->hasAccess('create')) {
            $actions['create_multiple'] = [
                'label' => 'Add many',
                'url' => $this->generateUrl('create_multiple'),
                'icon' => 'files-o',
            ];
        }

        return $actions;
    }

    protected function configureListFields(ListMapper $list)
    {
        $list->addIdentifier('id')
            ->add('samplingActivity')
            ->add('samplingDocumentType')
            ->add('document')
            ->add('startDate')
            ->add('endDate')
            ->add('isActive')
            ->add('country')
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
            ->add('samplingActivity')
            ->add('samplingDocumentType')
            ->add('document')
            ->add('startDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('endDate', DateRangeFilter::class, [
                'field_type' => DateRangePickerType::class,
            ])
            ->add('country')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        if (!$this->hasParentFieldDescription()) {
            $form
                ->add('samplingActivity', ModelListType::class)
            ;
        }

	    $form
            ->add('samplingDocumentType', ModelListType::class)
            ->add('document', MediaType::class, [
                'provider' => 'sonata.media.provider.file',
                'context' => 'default'
            ])
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
            ->add('country', ModelListType::class, [
                'required' => false,
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('samplingActivity')
            ->add('samplingDocumentType')
            ->add('document')
            ->add('file', null, [
                'template' => 'SonataAdmin/CRUD/SamplingDocumentation/show_file.html.twig'
            ])
            ->add('startDate')
            ->add('endDate')
            ->add('isActive')
            ->add('country')
        ;
    }
}
