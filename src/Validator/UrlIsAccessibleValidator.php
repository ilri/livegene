<?php

namespace App\Validator;

use Symfony\Component\Validator\{Constraint, ConstraintValidator,};

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

        $headers = get_headers($value);
        $statusCodeHeaders = array_filter($headers, function($item) {
            return strpos($item, 'HTTP/') === 0;
        });

        $flag = true;
        if ($statusCodeHeaders) {
            $statusCode = end($statusCodeHeaders);
            $flag = strpos($statusCode, '200');
        }

        if (!$flag) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
