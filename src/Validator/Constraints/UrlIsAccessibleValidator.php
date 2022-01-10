<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\{
    Constraint,
    ConstraintValidator,
};
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class UrlIsAccessibleValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        /* @var $constraint UrlIsAccessible */

        if (null === $value || '' === $value) {
            return;
        }

        $client = new Client();
        try {
            $response = $client->request('GET', $value, [
                'http_errors' => false,
            ]);
            $statusCode = $response->getStatusCode();
        } catch (GuzzleException $e) {
            if ($e->hasResponse()) {
                $response = $e->hasResponse();
                $statusCode = $response->getStatusCode();
            } else {
                $statusCode = null;
            }
        }

        if (200 != $statusCode) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
