<?php

namespace App\Repository;

use App\Entity\Expenditure;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Expenditure|null find($id, $lockMode = null, $lockVersion = null)
 * @method Expenditure|null findOneBy(array $criteria, array $orderBy = null)
 * @method Expenditure[]    findAll()
 * @method Expenditure[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExpenditureRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Expenditure::class);
    }

    // /**
    //  * @return Expenditure[] Returns an array of Expenditure objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Expenditure
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
