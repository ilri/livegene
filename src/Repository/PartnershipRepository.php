<?php

namespace App\Repository;

use App\Entity\Partnership;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Partnership|null find($id, $lockMode = null, $lockVersion = null)
 * @method Partnership|null findOneBy(array $criteria, array $orderBy = null)
 * @method Partnership[]    findAll()
 * @method Partnership[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartnershipRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Partnership::class);
    }

    // /**
    //  * @return Partnership[] Returns an array of Partnership objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Partnership
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
