<?php

namespace App\Repository;

use App\Entity\SDGRole;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SDGRole|null find($id, $lockMode = null, $lockVersion = null)
 * @method SDGRole|null findOneBy(array $criteria, array $orderBy = null)
 * @method SDGRole[]    findAll()
 * @method SDGRole[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SDGRoleRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SDGRole::class);
    }

    // /**
    //  * @return SDGRole[] Returns an array of SDGRole objects
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
    public function findOneBySomeField($value): ?SDGRole
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
