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

        $headers = get_headers($value, true);
        $statusCodes = array_filter($headers, function($key) {
            return is_int($key);
        }, ARRAY_FILTER_USE_KEY);
        $statusCode = substr(end($statusCodes), 9, 3);

        if (200 != $statusCode) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation()
            ;
        }
    }
}
