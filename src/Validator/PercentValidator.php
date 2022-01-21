<?php

namespace App\Validator;

use Symfony\Component\Validator\{Constraint, ConstraintValidator,};

class PercentValidator extends ConstraintValidator
{
    /**
     * { @inheritdoc }
     */
    public function validate($value, Constraint $constraint)
    {
        /* @var $constraint Percent */

        switch (get_class($value)) {
            case 'App\Entity\StaffRole':
                $subject = $value->getStaffMember();
                $totalPercent = $subject ? $subject->getTotalStaffRolesPercent() : null;
                break;
            case 'App\Entity\SDGRole':
                $subject = $value->getProject();
                $totalPercent = $subject ? $subject->getTotalSDGRolesPercent() : null;
                break;
            case 'App\Entity\CountryRole':
                $subject = $value->getProject();
                $totalPercent = $subject ? $subject->getTotalCountryRolesPercent() : null;
                break;
            case 'App\Entity\AnimalSpeciesRole':
                $subject = $value->getProject();
                $totalPercent = $subject ? $subject->getTotalAnimalSpeciesRolesPercent() : null;
                break;
            default:
                return;
        }

        if ($totalPercent > 1.00) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ subject }}', $subject)
                ->setParameter('{{ total }}', $totalPercent * 100)
                ->atPath('percent')
                ->addViolation()
            ;
        }
    }
}
