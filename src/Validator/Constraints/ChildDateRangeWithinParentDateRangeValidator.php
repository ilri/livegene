<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Partnership;

class ChildDateRangeWithinParentDateRangeValidator extends ConstraintValidator
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function validate($entity, Constraint $constraint)
    {
        /* @var $constraint App\Validator\ChildDateRangeWithinParentDateRange */

        if (null === $entity->getStartDate() || null === $entity->getEndDate()) {
            return;
        }

        if ($entity->getStartDate() < $entity->getProject()->getStartDate()) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ entity }}', $this->getEntityName($entity))
                ->setParameter('{{ position }}', 'start')
                ->setParameter('{{ childDate }}', $entity->getStartDate()->format('Y-m-d'))
                ->setParameter('{{ parentDate }}', $entity->getProject()->getStartDate()->format('Y-m-d'))
                ->setParameter('{{ comparator }}', 'before')
                ->atPath('startDate')
                ->addViolation()
            ;
        }

        if ($entity->getEndDate() > $entity->getProject()->getEndDate()) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ entity }}', $this->getEntityName($entity))
                ->setParameter('{{ position }}', 'end')
                ->setParameter('{{ childDate }}', $entity->getEndDate()->format('Y-m-d'))
                ->setParameter('{{ parentDate }}', $entity->getProject()->getEndDate()->format('Y-m-d'))
                ->setParameter('{{ comparator }}', 'after')
                ->atPath('endDate')
                ->addViolation()
            ;
        }
    }

    private function getEntityName($entity): string
    {
        $fqcn = get_class($entity);
        $tableName = $this->em->getClassMetadata($fqcn)->getTableName();
        return str_replace('_', ' ', substr($tableName, 4));
    }
}
