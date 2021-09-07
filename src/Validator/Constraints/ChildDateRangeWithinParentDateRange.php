<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class ChildDateRangeWithinParentDateRange extends Constraint
{
    public string $message = 'The {{ entity }} {{ position }} date ({{ childDate }}) must not be {{ comparator }} the project {{ position }} date ({{ parentDate }}).';

    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}
