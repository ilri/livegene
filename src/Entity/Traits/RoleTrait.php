<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

trait RoleTrait
{
    /**
     * @ORM\Column(type="smallint", options={"unsigned": true})
     * @Assert\Range(
     *     min=0,
     *     max=100
     * )
     */
    private $percent;

    public function getPercent(): ?int
    {
        return $this->percent;
    }

    public function setPercent(int $percent): self
    {
        $this->percent = $percent;

        return $this;
    }

}
