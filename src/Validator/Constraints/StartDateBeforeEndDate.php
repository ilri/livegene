<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class StartDateBeforeEndDate extends Constraint
{
    public string $message = 'The start date "{{ startDate }}" must be before the "{{ endDate }}".';

    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}
