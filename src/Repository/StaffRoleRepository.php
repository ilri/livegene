<?php

namespace App\Repository;

use App\Entity\StaffRole;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StaffRole|null find($id, $lockMode = null, $lockVersion = null)
 * @method StaffRole|null findOneBy(array $criteria, array $orderBy = null)
 * @method StaffRole[]    findAll()
 * @method StaffRole[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StaffRoleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StaffRole::class);
    }

    // /**
    //  * @return StaffRole[] Returns an array of StaffRole objects
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
    public function findOneBySomeField($value): ?StaffRole
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
