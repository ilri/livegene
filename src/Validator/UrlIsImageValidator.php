<?php

namespace App\Validator;

use Symfony\Component\Validator\{Constraint, ConstraintValidator,};

class UrlIsImageValidator extends ConstraintValidator
{
    /**
     * { @inheritdoc }
     */
    public function validate($value, Constraint $constraint)
    {
        /* @var $constraint UrlIsImage */

        if (null === $value || '' === $value) {
            return;
        }

        $headers = get_headers($value);
        $contentTypeHeaders = array_filter($headers, function($item) {
            return strncasecmp('content-type', $item, 12) === 0;
        });

        $flag = true;
        if ($contentTypeHeaders) {
            $contentType = explode(':', end($contentTypeHeaders), 2);
            $flag = strpos($contentType[1], 'image/');
        }

        if (!$flag) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
