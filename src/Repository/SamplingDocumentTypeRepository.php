<?php

namespace App\Repository;

use App\Entity\SamplingDocumentType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SamplingDocumentType|null find($id, $lockMode = null, $lockVersion = null)
 * @method SamplingDocumentType|null findOneBy(array $criteria, array $orderBy = null)
 * @method SamplingDocumentType[]    findAll()
 * @method SamplingDocumentType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SamplingDocumentTypeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SamplingDocumentType::class);
    }

    // /**
    //  * @return SamplingDocumentType[] Returns an array of SamplingDocumentType objects
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
    public function findOneBySomeField($value): ?SamplingDocumentType
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
