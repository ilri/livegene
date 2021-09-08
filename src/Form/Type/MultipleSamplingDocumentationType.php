<?php

namespace App\Form\Type;

use App\Entity\{
    SamplingActivity,
    SamplingDocumentType,
};
use Sonata\AdminBundle\Form\Type\ModelType;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class MultipleSamplingDocumentationType extends AbstractType
{
    private ContainerInterface $container;

    /**
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('samplingActivity', ModelType::class, [
                'class' => SamplingActivity::class,
                'model_manager' => $this->container->get('sonata.admin.manager.orm'),
                'placeholder' => '-- Please choose a sampling activity --',
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('samplingDocumentType', ModelType::class, [
                'class' => SamplingDocumentType::class,
                'model_manager' => $this->container->get('sonata.admin.manager.orm'),
                'placeholder' => '-- Please choose a sampling document type --',
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('files', MultipleFileType::class, [
                'attr' => [
                    'accept' => 'application/pdf'
                ],
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Create and return to list',
                'attr' => [
                    'class' => 'btn btn-success'
                ]
            ])
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => null,
        ));
    }
}
