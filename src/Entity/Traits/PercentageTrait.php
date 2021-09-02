<?php

namespace App\Entity\Traits;

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
