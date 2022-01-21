<?php

namespace App\Validator;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\{Constraint, ConstraintValidator,};

class ChildDateRangeWithinParentDateRangeValidator extends ConstraintValidator
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * {@inheritdoc }
     */
    public function validate($value, Constraint $constraint)
    {
        /* @var $constraint ChildDateRangeWithinParentDateRange */

        if (null === $value->getStartDate() || null === $value->getEndDate() || null === $value->getProject()) {
            return;
        }
dump($value);
        if ($value->getStartDate() < $value->getProject()->getStartDate()) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ entity }}', $this->getEntityName($value))
                ->setParameter('{{ position }}', 'start')
                ->setParameter('{{ childDate }}', $value->getStartDate()->format('Y-m-d'))
                ->setParameter('{{ parentDate }}', $value->getProject()->getStartDate()->format('Y-m-d'))
                ->setParameter('{{ comparator }}', 'before')
                ->atPath('startDate')
                ->addViolation();
        }

        if ($value->getEndDate() > $value->getProject()->getEndDate()) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ entity }}', $this->getEntityName($value))
                ->setParameter('{{ position }}', 'end')
                ->setParameter('{{ childDate }}', $value->getEndDate()->format('Y-m-d'))
                ->setParameter('{{ parentDate }}', $value->getProject()->getEndDate()->format('Y-m-d'))
                ->setParameter('{{ comparator }}', 'after')
                ->atPath('endDate')
                ->addViolation();
        }
    }

    /**
     * @param $entity
     * @return string
     */
    private function getEntityName($entity): string
    {
        $fqcn = get_class($entity);
        $tableName = $this->em->getClassMetadata($fqcn)->getTableName();

        return str_replace('_', ' ', substr($tableName, 4));
    }
}
