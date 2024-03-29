<?php

namespace App\Mailer;

use FOS\UserBundle\Mailer\MailerInterface;
use FOS\UserBundle\Model\UserInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Environment;

class UserMailer implements MailerInterface
{
    private UrlGeneratorInterface $router;
    private Environment $twig;
    private \Swift_Mailer $mailer;
    private array $fromEmail;

    public function __construct(UrlGeneratorInterface $router, Environment $twig, \Swift_Mailer $mailer, array $fromEmail)
    {
        $this->router = $router;
        $this->twig   = $twig;
        $this->mailer = $mailer;
        $this->fromEmail = $fromEmail;
    }

    /**
     * @inheritDoc
     */
    public function sendConfirmationEmailMessage(UserInterface $user)
    {
        throw new \LogicException('This method is not implemented.');
    }

    /**
     * @inheritDoc
     */
    public function sendResettingEmailMessage(UserInterface $user)
    {
        $url = $this->router->generate('sonata_user_admin_resetting_reset', [
            'token' => $user->getConfirmationToken(),
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $message = (new \Swift_Message())
            ->setSubject('Reset your password')
            ->setFrom($this->fromEmail)
            ->setTo($user->getEmail())
            ->setBody(
                $this->twig->render('mailer/resetting.html.twig', [
                    'user' => $user,
                    'confirmationUrl' => $url,
                ]),
                'text/html'
            )
        ;

        $this->mailer->send($message);
    }
}
