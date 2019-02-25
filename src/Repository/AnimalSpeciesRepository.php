<?php

namespace App\Repository;

use App\Entity\AnimalSpecies;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AnimalSpecies|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnimalSpecies|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnimalSpecies[]    findAll()
 * @method AnimalSpecies[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnimalSpeciesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AnimalSpecies::class);
    }

    // /**
    //  * @return AnimalSpecies[] Returns an array of AnimalSpecies objects
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
    public function findOneBySomeField($value): ?AnimalSpecies
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
