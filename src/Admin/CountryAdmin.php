<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\{
    ListMapper,
    DatagridMapper
};
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\CountryType;

class CountryAdmin extends AbstractAdmin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        if ($this->hasRequest()) {
            if ($mode = $this->request->query->get('_list_mode')) {
                $this->setListMode($mode);
            } else {
                $this->setListMode('mosaic');
            }
        }

        $listMapper
            ->addIdentifier('country')
            ->add('countryName')
            ->add('flag', null, [
                'sortable' => false,
                'template' => 'SonataAdmin/CRUD/Country/list_flag.html.twig'
            ])
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
        $datagridMapper->add('country');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('country', CountryType::class, [
                'placeholder' => '-- please choose a country --',
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $showMapper)
    {
        $showMapper
            ->add('country', null,[ 
                'label' => 'ISO 3166-1 alpha-2 code'
            ])
            ->add('countryName', null, [
                'label' => 'Country name'
            ])
        ;
    }
}
