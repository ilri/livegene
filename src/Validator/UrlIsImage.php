<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class UrlIsImage extends Constraint
{
    public string $message = 'The URL "{{ value }}" is not not an image.';
}
