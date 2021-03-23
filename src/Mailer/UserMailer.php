<?php

namespace App\Mailer;

use FOS\UserBundle\Mailer\MailerInterface;
use FOS\UserBundle\Model\UserInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Environment;

class UserMailer implements MailerInterface
{
    /**
     * @var UrlGeneratorInterface
     */
    private $urlGenerator;

    /**
     * @var Environment
     */
    private $twig;

    /**
     * @var \Swift_Mailer
     */
    private $mailer;

    /**
     * @var array
     */
    private $fromEmail;

    public function __construct(UrlGeneratorInterface $urlGenerator, Environment $twig, \Swift_Mailer $mailer, array $fromEmail)
    {
        $this->urlGenerator = $urlGenerator;
        $this->twig = $twig;
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
        $url = $this->urlGenerator->generate('sonata_user_admin_resetting_reset', [
            'token' => $user->getConfirmationToken(),
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $message = (new \Swift_Message())
            ->setSubject('Reset your password')
            ->setFrom($this->fromEmail)
            ->setTo((string) $user->getEmail())
            ->setBody(
                $this->twig->render('user_mailer/resetting.html.twig', [
                    'user' => $user,
                    'confirmationUrl' => $url,
                ]),
                'text/html'
            )
        ;

        $this->mailer->send($message);
    }
}