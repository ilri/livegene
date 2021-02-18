<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

trait RoleTrait
{
    /**
     * @ORM\Column(type="decimal", precision=5, scale=4)
     * @Assert\Range(
     *     min=0.00,
     *     max=1.00,
     *     notInRangeMessage="This value should be between 0.00% and 100.00%.",
     *     minMessage="The minimal allowed value is 0.00%.",
     *     maxMessage="The maximal allowed value is 100.00%."
     * )
     * @Groups({
     *     "staff_role:collection:get", "staff_role:item:get",
     *     "project:collection:get", "project:item:get",
     *     "animal_species_role:collection:get", "animal_species_role:item:get",
     * })
     */
    private $percent;

    public function getPercent()
    {
        return $this->percent;
    }

    public function setPercent($percent): self
    {
        $this->percent = $percent;

        return $this;
    }
}
