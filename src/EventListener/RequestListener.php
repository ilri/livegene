<?php

namespace App\EventListener;

use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class RequestListener
{
    /**
     * @var Registry
     */
    private $doctrine;

    public function __construct(Registry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        try {
            $this->doctrine->getConnection()->exec('PRAGMA foreign_keys = ON');
        } catch (\Exception $e) {
            return;
        }
    }
}
