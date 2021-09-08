<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

trait PersonTrait
{
    /**
     * @ORM\Column(type="string", length=30)
     * @Assert\NotBlank()
     * @Groups({
     *     "staff_member:collection:get", "staff_member:item:get",
     *     "staff_role:collection:get", "staff_role:item:get",
     *     "project:collection:get", "project:item:get",
     *     "contact:collection:get", "contact:item:get",
     * })
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=50)
     * @Assert\NotBlank()
     * @Groups({
     *     "staff_member:collection:get", "staff_member:item:get",
     *     "staff_role:collection:get", "staff_role:item:get",
     *     "project:collection:get", "project:item:get",
     *     "contact:collection:get", "contact:item:get",
     * })
     */
    private ?string $lastName;

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }
}
