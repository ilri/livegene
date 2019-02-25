<?php

namespace App\Repository;

use App\Entity\SDG;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SDG|null find($id, $lockMode = null, $lockVersion = null)
 * @method SDG|null findOneBy(array $criteria, array $orderBy = null)
 * @method SDG[]    findAll()
 * @method SDG[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SDGRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SDG::class);
    }

    // /**
    //  * @return SDG[] Returns an array of SDG objects
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
    public function findOneBySomeField($value): ?SDG
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
