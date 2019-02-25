<?php

namespace App\Repository;

use App\Entity\CountryRole;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CountryRole|null find($id, $lockMode = null, $lockVersion = null)
 * @method CountryRole|null findOneBy(array $criteria, array $orderBy = null)
 * @method CountryRole[]    findAll()
 * @method CountryRole[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CountryRoleRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CountryRole::class);
    }

    // /**
    //  * @return CountryRole[] Returns an array of CountryRole objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CountryRole
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
