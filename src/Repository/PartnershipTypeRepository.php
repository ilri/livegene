<?php

namespace App\Repository;

use App\Entity\PartnershipType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PartnershipType|null find($id, $lockMode = null, $lockVersion = null)
 * @method PartnershipType|null findOneBy(array $criteria, array $orderBy = null)
 * @method PartnershipType[]    findAll()
 * @method PartnershipType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartnershipTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PartnershipType::class);
    }

    // /**
    //  * @return PartnershipType[] Returns an array of PartnershipType objects
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
    public function findOneBySomeField($value): ?PartnershipType
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
