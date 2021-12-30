<?php

namespace App\Mailer;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Twig\Environment;
use Twig\Error\{
    LoaderError,
    RuntimeError,
    SyntaxError,
};

class NewPublicationsMailer
{
    private Environment $twig;
    private \Swift_Mailer $mailer;
    private ParameterBagInterface $params;

    /**
     * @param   Environment            $twig
     * @param   \Swift_Mailer          $mailer
     * @param   ParameterBagInterface  $params
     */
    public function __construct(Environment $twig, \Swift_Mailer $mailer, ParameterBagInterface $params)
    {
        $this->twig   = $twig;
        $this->mailer = $mailer;
        $this->params = $params;
    }

    /**
     * @param   array  $recipients
     * @param   array  $publications
     *
     * @return void
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendNewPublicationsNotificationMessage(array $recipients, array $publications): void
    {
        $sender = $this->params->get('mailer_user');
        $message = (new \Swift_Message())
            ->setSubject('New activities in the LiveGeneShare group')
            ->setFrom($sender)
            ->setTo($recipients)
            ->setBody(
                $this->twig->render('mailer/new_publications.html.twig', [
                    'publications' => $publications,
                ]),
                'text/html'
            )
        ;

        $this->mailer->send($message);
    }
}
