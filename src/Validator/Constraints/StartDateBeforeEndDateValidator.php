<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\{
    Constraint,
    ConstraintValidator,
};

class StartDateBeforeEndDateValidator extends ConstraintValidator
{
    /**
     * {@inheritdoc }
     */
    public function validate($value, Constraint $constraint)
    {
        /* @var $constraint StartDateBeforeEndDate */

        if (null === $value->getStartDate() || null === $value->getEndDate()) {
            return;
        }

        if ($value->getStartDate() >= $value->getEndDate()) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ startDate }}', $value->getStartDate()->format('Y-m-d'))
                ->setParameter('{{ endDate }}', $value->getEndDate()->format('Y-m-d'))
                ->addViolation()
            ;
        }
    }
}
