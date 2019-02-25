<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class StartDateBeforeEndDateValidator extends ConstraintValidator
{
    public function validate($entity, Constraint $constraint)
    {
        /* @var $constraint App\Validator\StartDateBeforeEndDate */

        if (null === $entity->getStartDate() || null === $entity->getEndDate()) {
            return;
        }

        if ($entity->getStartDate() >= $entity->getEndDate()) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ startDate }}', $entity->getStartDate()->format('Y-m-d'))
                ->setParameter('{{ endDate }}', $entity->getEndDate()->format('Y-m-d'))
                ->addViolation()
            ;
        }
    }
}
