<?php

namespace App\Validator;

use Symfony\Component\Validator\{Constraint, ConstraintValidator,};
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class UrlIsAccessibleValidator extends ConstraintValidator
{
    /**
     * { @inheritdoc }
     */
    public function validate($value, Constraint $constraint)
    {
        /* @var $constraint UrlIsAccessible */

        if (null === $value || '' === $value) {
            return;
        }

        $client = new Client();
        try {
            $response = $client->request('HEAD', $value);
            $statusCode = $response->getStatusCode();
        } catch (GuzzleException $e) {
            $statusCode = $e->getCode();
        }

        if (200 !== $statusCode) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation()
            ;
        }
    }
}
