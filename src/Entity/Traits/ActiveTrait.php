<?php

namespace App\Entity\Traits;

use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

trait ActiveTrait
{
    /**
     * @Groups({"project:collection:get", "project:item:get", "staff_role:collection:get", "staff_role:item:get"})
     */
    public function getIsActive(): bool
    {
        $now = Carbon::now();
        return $this->getEndDate() >= $now && $this->getStartDate() <= $now;
    }
}
