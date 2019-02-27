<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\{
    ArrayCollection,
    Collection
};
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PartnershipTypeRepository")
 * @ORM\Table(name="app_partnership_type")
 * @UniqueEntity("description")
 */
class PartnershipType
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30, unique=true)
     * @Assert\NotBlank()
     */
    private $description;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Partnership", mappedBy="partnershipType")
     */
    private $partnerships;

    public function __construct()
    {
        $this->partnerships = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id ? $this->description : '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection|Partnership[]
     */
    public function getPartnerships(): Collection
    {
        return $this->partnerships;
    }

    public function addPartnership(Partnership $partnership): self
    {
        if (!$this->partnerships->contains($partnership)) {
            $this->partnerships[] = $partnership;
            $partnership->setPartnershipType($this);
        }

        return $this;
    }

    public function removePartnership(Partnership $partnership): self
    {
        if ($this->partnerships->contains($partnership)) {
            $this->partnerships->removeElement($partnership);
            // set the owning side to null (unless already changed)
            if ($partnership->getPartnershipType() === $this) {
                $partnership->setPartnershipType(null);
            }
        }

        return $this;
    }
}
