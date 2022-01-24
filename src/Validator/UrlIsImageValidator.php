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

        $headers = get_headers($value, true);
        $contentType = array_filter($headers, function($key) {
            return 0 === strcasecmp($key, 'content-type');
        }, ARRAY_FILTER_USE_KEY);
        $contentType = end($contentType);
        $mimeType = is_array($contentType) ? end($contentType) : $contentType;

        if (false === strpos($mimeType, 'image/')) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation()
            ;
        }
    }
}
