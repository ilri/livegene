<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\{
    Constraint,
    ConstraintValidator
};

class PercentValidator extends ConstraintValidator
{
    public function validate($entity, Constraint $constraint)
    {
        /* @var $constraint Percent */

        switch (get_class($entity)) {
            case 'App\Entity\StaffRole':
                $subject = $entity->getStaffMember();
                $totalPercent = $subject ? $subject->getTotalStaffRolesPercent() : null;
                break;
            case 'App\Entity\SDGRole':
                $subject = $entity->getProject();
                dump($subject);
                $totalPercent = $subject ? $subject->getTotalSDGRolesPercent() : null;
                break;
            case 'App\Entity\CountryRole':
                $subject = $entity->getProject();
                $totalPercent = $subject ? $subject->getTotalCountryRolesPercent() : null;
            break;
            case 'App\Entity\AnimalSpeciesRole':
                $subject = $entity->getProject();
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
