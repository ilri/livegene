<?php

namespace App\Repository;

use App\Entity\AnimalSpeciesRole;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AnimalSpeciesRole|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnimalSpeciesRole|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnimalSpeciesRole[]    findAll()
 * @method AnimalSpeciesRole[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnimalSpeciesRoleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AnimalSpeciesRole::class);
    }

    // /**
    //  * @return AnimalSpeciesRole[] Returns an array of AnimalSpeciesRole objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AnimalSpeciesRole
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
