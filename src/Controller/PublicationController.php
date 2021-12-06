<?php

namespace App\Controller;

use App\Exception\CacheItemNotFoundException;
use App\Repository\Mendeley\PublicationRepository;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
     * @Route("/api/publications", name="api_publications_get_collection")
     *
     * @return Response
     */
    public function listAction(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_SPA_USER');

        $response = new Response();
        try {
            $json = $this->publicationRepository->getPublications();
            $response->setContent(json_encode($json));
            $response->setStatusCode(Response::HTTP_OK);
        } catch (CacheItemNotFoundException $e) {
            $response->setContent(
                json_encode(
                    ['message' => 'Publications could not be retrieved. Mendeley Access Token not found']
                )
            );
            $response->setStatusCode(Response::HTTP_UNAUTHORIZED);
        } catch (GuzzleException $e) {
            $response->setContent(
                json_encode(
                    ['message' => 'Publications could not be retrieved. Bad request.']
                )
            );
            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
        }
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/api/publications/bib", name="api_publications_get_collection_bib")
     *
     * @return Response
     */
    public function listBibAction(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_SPA_USER');

        $response = new Response();
        try {
            $bibtex = $this->publicationRepository->getPublicationsBib();
            $response->setContent($bibtex);
            $response->setStatusCode(Response::HTTP_OK);
        } catch (CacheItemNotFoundException $e) {
            $response->setContent(
                json_encode(
                    ['message' => 'BiBTeX citations could not be retrieved. Mendeley Access Token not found.']
                )
            );
            $response->setStatusCode(Response::HTTP_UNAUTHORIZED);
        } catch (GuzzleException $e) {
            $response->setContent(
                json_encode(
                    ['message' => 'BiBTeX citations could not be retrieved. Bad request.']
                )
            );
            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
        }
        $response->headers->set('Content-Type', 'text/plain');

        return $response;
    }

    /**
     * @Route("/api/publications/{id}/bib", name="api_publications_get_item_bib")
     *
     * @param   string  $id
     *
     * @return Response
     */
    public function showBibAction(string $id): Response
    {
        $this->denyAccessUnlessGranted('ROLE_SPA_USER');

        $response = new Response();
        try {
            $bibtex = $this->publicationRepository->getPublicationBib($id);
            $response->setContent($bibtex);
            $response->setStatusCode(Response::HTTP_OK);
        } catch (CacheItemNotFoundException $e) {
            $response->setContent(
                json_encode(
                    ['message' => 'BiBTeX citation could not be retrieved. Mendeley Access Token not found.']
                )
            );
            $response->setStatusCode(Response::HTTP_UNAUTHORIZED);
        } catch (GuzzleException $e) {
            $response->setContent(
                json_encode(
                    ['message' => 'BiBTeX citation could not be retrieved. Bad request.']
                )
            );
            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
        }
        $response->headers->set('Content-Type', 'text/plain');

        return $response;
    }
}
