<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use App\Application\Sonata\UserBundle\Entity\User;
use Symfony\Component\HttpFoundation\Cookie;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(JWTTokenManagerInterface $JWTManager)
    {
        $userRepository = $this->getDoctrine()->getRepository(User::class);
        $username = $this->getParameter('spa_user');
        $user = $userRepository->findOneByUsername($username);

        $token = $JWTManager->create($user);

        $response = $this->render('home/index.html.twig');
        $response->headers->setCookie(Cookie::create('jwt', $token));
        return $response;
    }
}
