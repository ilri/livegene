<?php

namespace App\Repository;

use App\Entity\SamplingDocumentation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SamplingDocumentation|null find($id, $lockMode = null, $lockVersion = null)
 * @method SamplingDocumentation|null findOneBy(array $criteria, array $orderBy = null)
 * @method SamplingDocumentation[]    findAll()
 * @method SamplingDocumentation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SamplingDocumentationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SamplingDocumentation::class);
    }

    // /**
    //  * @return SamplingDocumentation[] Returns an array of SamplingDocumentation objects
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
    public function findOneBySomeField($value): ?SamplingDocumentation
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
