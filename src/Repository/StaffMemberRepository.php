<?php

namespace App\Repository;

use App\Entity\StaffMember;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StaffMember|null find($id, $lockMode = null, $lockVersion = null)
 * @method StaffMember|null findOneBy(array $criteria, array $orderBy = null)
 * @method StaffMember[]    findAll()
 * @method StaffMember[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StaffMemberRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StaffMember::class);
    }

    // /**
    //  * @return StaffMember[] Returns an array of Staff objects
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
    public function findOneBySomeField($value): ?Staff
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
