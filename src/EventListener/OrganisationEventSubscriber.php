<?php

namespace App\EventListener;

use App\Entity\Organisation;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\{
    LifecycleEventArgs,
    PreUpdateEventArgs,
};
use Doctrine\ORM\Events;

class OrganisationEventSubscriber implements EventSubscriber
{

    /**
     * @inheritDoc
     */
    public function getSubscribedEvents(): array
    {
        return [
            Events::prePersist,
            Events::preUpdate,
        ];
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        if (!$entity instanceof Organisation) {
            return;
        }

        if ($entity->getLogoUrl()) {
            $this->setLogoData($entity);
        }
    }

    public function preUpdate(PreUpdateEventArgs $args)
    {
        $entity = $args ->getObject();

        if (!$entity instanceof Organisation) {
            return;
        }

        if ($args->hasChangedField('logoUrl')) {
             if ($entity->getLogoUrl()) {
                 $this->setLogoData($entity);
             } else {
                 $entity->setEncodedLogo(null);
                 $entity->setLogoStatus(null);
             }
        }
    }

    private function setLogoData(Organisation $entity)
    {
        $logo = file_get_contents($entity->getLogoUrl());
        $extension = pathinfo(parse_url($entity->getLogoUrl(), PHP_URL_PATH), PATHINFO_EXTENSION);
        $encodedLogo = sprintf('data:image/%s;base64,%s', $extension, base64_encode($logo));

        $entity->setEncodedLogo($encodedLogo);
        $entity->setLogoStatus(true);
    }
}
