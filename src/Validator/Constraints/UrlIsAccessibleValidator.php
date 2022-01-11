<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\{
    Constraint,
    ConstraintValidator,
};

class UrlIsAccessibleValidator extends ConstraintValidator
{
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
        dump($headers);
        dump($statusCodeHeaders);

        $flag = true;
        if ($statusCodeHeaders) {
            $statusCode = end($statusCodeHeaders);
            $flag = strpos($statusCode, '200');
        }
        dump($flag);
        if (!$flag) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
