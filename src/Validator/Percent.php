<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class Percent extends Constraint
{
    public string $message = 'The total percent for {{ subject }} must not exceed 100%. Now it is {{ total }}%.';

    /**
     * { @inheritdoc }
     */
    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}
