<?php

namespace App\Controller\Admin;

use Sonata\AdminBundle\Controller\CRUDController;
use Symfony\Component\HttpFoundation\Request;

class SamplingActivityAdminController extends CRUDController
{
    public function preDelete(Request $request, $object)
    {
        if ($object->getSamplingDocumentations()->isEmpty()) {
            return null;
        }

        $count = $object->getSamplingDocumentations()->count();
        $objectName = $this->admin->toString($object);
        $this->addFlash(
            'sonata_flash_error',
            sprintf(
                'The sampling activity "%s" can not be deleted because it contains %s sampling documentation(s).',
                $objectName,
                $count
            )
        );

        return $this->redirectTo($object);
    }
}
