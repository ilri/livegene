<?php

namespace App\Entity\Traits;

use Carbon\Carbon;
use Symfony\Component\Serializer\Annotation\Groups;

trait ActiveTrait
{
    /**
     * @Groups({
     *     "project:collection:get",
     *     "project:item:get",
     *     "sampling_documentation:collection:get",
     *     "sampling_documentation:item:get",
     * })
     */
    public function getIsActive(): bool
    {
        $now = Carbon::now();
        return $this->getEndDate() >= $now && $this->getStartDate() <= $now;
    }
}
