<?php

namespace App\Controller;

use App\Application\Sonata\UserBundle\Entity\User;
use Carbon\Carbon;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\{
    Cookie,
    Response,
};
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     *
     * @param JWTTokenManagerInterface $JWTManager
     * @return Response
     */
    public function index(JWTTokenManagerInterface $JWTManager): Response
    {
        $userRepository = $this->getDoctrine()->getRepository(User::class);
        $username = $this->getParameter('spa_user');
        $user = $userRepository->findOneByUsername($username);

        $token = $JWTManager->create($user);

        $now = Carbon::now();
        $response = $this->render('home/index.html.twig');
        $response->headers->setCookie(Cookie::create(
            'jwt',
            $token, // value
            $now->addHour(), // expire
            '/', // path
            null, // domain
            false, // secure
            false, // httpOnly
            false, // raw
            Cookie::SAMESITE_STRICT // sameSite
        ));
        return $response;
    }
}
