<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\StaffRole;

class PercentValidator extends ConstraintValidator
{
    public function validate($entity, Constraint $constraint)
    {
        /* @var $constraint App\Validator\Constraint\Percent */

        switch (get_class($entity)) {
            case 'App\Entity\StaffRole':
                $subject = $entity->getStaffMember();
                $totalPercent = $subject->getTotalRolesPercent();
                break;
            case 'App\Entity\SDGRole':
                $subject = $entity->getProject();
                dump($subject);
                $totalPercent = $subject->getTotalSDGRolesPercent();
                break;
            case 'App\Entity\CountryRole':
                $subject = $entity->getProject();
                $totalPercent = $subject->getTotalCountryRolesPercent();
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
