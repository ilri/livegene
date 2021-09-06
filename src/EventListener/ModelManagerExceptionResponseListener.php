<?php

namespace App\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Sonata\AdminBundle\Exception\ModelManagerException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ModelManagerExceptionResponseListener
{
    private SessionInterface $session;
    private UrlGeneratorInterface $router;
    private EntityManagerInterface $em;

    public function __construct(SessionInterface $session, UrlGeneratorInterface $router, EntityManagerInterface $em)
    {
        $this->session = $session;
        $this->router = $router;
        $this->em = $em;
    }

    public function onKernelException(ExceptionEvent $event)
    {
        // get the exception
        $exception =  $event->getThrowable();
        // we proceed only if it is ModelManagerException
        if (!$exception instanceof ModelManagerException) {
            return;
        }

        // get the route and id
        // if it wasn't a delete route we don't want to proceed
        $request = $event->getRequest();
        $route = $request->get('_route');
        $id = $request->get('id');
        if (substr($route, -6) !== 'delete') {
            return;
        }
        $route = str_replace('delete', 'edit', $route);

        // get the message
        // we proceed only if it is the desired message
        $message = $exception->getMessage();
        $failure = 'Failed to delete object: ';
        if (strpos($message, $failure) < 0) {
            return;
        }

        // get the object that can't be deleted
        $entity = str_replace($failure, '', $message);
        $repository = $this->em->getRepository($entity);
        $object = $repository->findOneById($id);

        $this->session->getFlashBag()
            ->add(
                'sonata_flash_error',
                sprintf('The item "%s" can not be deleted because other items depend on it.', $object)
            )
        ;

        // redirect to the edit form of the object
        $url = $this->router->generate($route, ['id' => $id]);
        $response = new RedirectResponse($url);
        $event->setResponse($response);
    }
}
