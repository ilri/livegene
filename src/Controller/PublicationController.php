<?php

namespace App\Controller;

use App\Exception\CacheItemNotFoundException;
use App\Repository\Mendeley\PublicationRepository;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PublicationController extends AbstractController
{
    private PublicationRepository $publicationRepository;

    public function __construct(PublicationRepository $publicationRepository)
    {
        $this->publicationRepository = $publicationRepository;
    }

    /**
     * @Route("/api/publications/{id}/bib", name="publication_get_bib")
     *
     * @param   Request  $request
     * @param   string   $id
     *
     * @return Response
     */
    public function showAction(Request $request, string $id): Response
    {
        $response = new Response();
        try {
            $bibtex = $this->publicationRepository->getPublicationBib($id);
            $response->setContent($bibtex);
            $response->setStatusCode(Response::HTTP_OK);
        } catch (CacheItemNotFoundException $e) {
            $response->setContent('BiBTeX could not be retrieved. Mendeley Access Token not found.');
            $response->setStatusCode(Response::HTTP_UNAUTHORIZED);
        } catch (GuzzleException $e) {
            $response->setContent('BiBTeX could not be retrieved. Bad request.');
            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
        }
        $response->headers->set('Content-Type', 'text/plain');

        return $response;
    }
}
