<?php

namespace App\Repository;

use App\Entity\SamplingActivity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SamplingActivity|null find($id, $lockMode = null, $lockVersion = null)
 * @method SamplingActivity|null findOneBy(array $criteria, array $orderBy = null)
 * @method SamplingActivity[]    findAll()
 * @method SamplingActivity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SamplingActivityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SamplingActivity::class);
    }

    // /**
    //  * @return SamplingActivity[] Returns an array of SamplingActivity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SamplingActivity
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
