<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class Percent extends Constraint
{
    public $message = 'The total percent for {{ subject }} must not exceed 100%. Now it is {{ total }}%.';

    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}
