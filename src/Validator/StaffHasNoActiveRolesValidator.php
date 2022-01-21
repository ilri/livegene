<?php

namespace App\Validator;

use App\Entity\StaffMember;
use Symfony\Component\Validator\{Constraint, ConstraintValidator,};

class StaffHasNoActiveRolesValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        /* @var $value StaffMember */
        /* @var $constraint StaffHasNoActiveRoles */

        if (null === $value->getIsActive() || '' === $value->getIsActive()) {
            return;
        }

        $countActiveStaffRoles = count($value->getActiveStaffRoles());

        if (!$value->getIsActive() && $countActiveStaffRoles) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ count }}', $countActiveStaffRoles)
                ->atPath('isActive')
                ->addViolation()
            ;
        }
    }
}
