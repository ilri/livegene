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

        $image = file_get_contents($value);
        $mimeType = (new \finfo(FILEINFO_MIME_TYPE))->buffer($image);

        if (false === strpos($mimeType, 'image/')) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
