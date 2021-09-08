<?php

namespace App\Controller\Admin;

use App\Application\Sonata\MediaBundle\Entity\Media;
use App\Entity\SamplingDocumentation;
use App\Form\Type\MultipleSamplingDocumentationType;
use Sonata\AdminBundle\Controller\CRUDController;
use Sonata\AdminBundle\Exception\ModelManagerException;
use Sonata\Doctrine\Model\ManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class SamplingDocumentationAdminController extends CRUDController
{
    private ManagerInterface $mediaManager;

    public function __construct(ManagerInterface $mediaManager)
    {
        $this->mediaManager = $mediaManager;
    }

    public function createMultipleAction(Request $request)
    {
        $this->admin->checkAccess('create');

        $providerName = 'sonata.media.provider.file';
        $context = 'default';

        $newObject = $this->admin->getNewInstance();

        $form = $this->createForm(MultipleSamplingDocumentationType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $isFormValid = $form->isValid();

            if ($isFormValid) {
                $data = $form->getData();
                $files = $data['files'];

                try {
                    foreach ($files as $file) {
                        /** @var Media $media */
                        $media = $this->mediaManager->create();
                        $media->setContext($context);
                        $media->setBinaryContent($file);
                        $media->setProviderName($providerName);
                        $this->mediaManager->save($media);

                        $samplingDocumentation = new SamplingDocumentation();
                        $samplingDocumentation->setSamplingActivity($data['samplingActivity']);
                        $samplingDocumentation->setDocument($media);
                        $samplingDocumentation->setSamplingDocumentType($data['samplingDocumentType']);

                        $this->admin->create($samplingDocumentation);
                    }

                    $this->addFlash(
                        'sonata_flash_success',
                        sprintf('A total of %d posts were successfully created.', count($files))
                    );
                    return $this->redirect($this->admin->generateUrl('list'));
                } catch (ModelManagerException $e) {
                    $isFormValid = false;
                    $this->handleModelManagerException($e);
                }
            }

            if (!$isFormValid) {
                $this->addFlash(
                    'sonata_flash_error',
                    'The form is not valid.'
                );
            }
        }

        $formView = $form->createView();

        $template = 'SonataAdmin/CRUD/SamplingDocumentation/create_multiple.html.twig';

        return $this->renderWithExtraParams($template, [
            'action' => 'create_multiple',
            'form' => $formView,
            'object' => $newObject,
            'objectId' => null
        ]);
    }
}
