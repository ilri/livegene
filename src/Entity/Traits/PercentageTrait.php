<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

trait PercentageTrait
{

    public function calculateTotalRolesPercentage(array $roles): float
    {
        return array_reduce(
            $roles,
            function($carry,$item){
                $carry += floatval($item->getPercent());
                return $carry;
            },
            0
        );
    }
}