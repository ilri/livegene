<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class UrlIsAccessible extends Constraint
{
    public string $message = 'The URL "{{ value }}" cannot be accessed.';
}
