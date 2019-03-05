<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\{
    ArrayCollection,
    Collection
};

/**
 * @ApiResource(
 *     collectionOperations={"get"={"method"="GET", "path"="/sdgs"}},
 *     itemOperations={"get"={"method"="GET", "path"="/sdgs/{id}", "requirements"={"id"="\d+"}}},
 *     attributes={
 *         "normalization_context"={"groups"={"read"}},
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\SDGRepository")
 * @ORM\Table(name="app_sdg")
 * @UniqueEntity("headline")
 * @UniqueEntity("fullName")
 * @UniqueEntity("color")
 * @UniqueEntity("link")
 * @UniqueEntity("logoUrl")
 */
class SDG
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, unique=true)
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $headline;

    /**
     * @ORM\Column(type="string", length=200, unique=true)
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $fullName;

    /**
     * @ORM\Column(type="string", length=7, unique=true)
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank()
     * @Assert\Url()
     * @Groups({"read"})
     */
    private $link;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank()
     * @Assert\Url()
     * @Groups({"read"})
     */
    private $logoUrl;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SDGRole", mappedBy="sdg", cascade={"persist", "remove"})
     */
    private $sdgRoles;

    public function __construct()
    {
        $this->sdgRoles = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id ? $this->headline : '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHeadline(): ?string
    {
        return $this->headline;
    }

    public function setHeadline(string $headline): self
    {
        $this->headline = $headline;

        return $this;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getLogoUrl(): ?string
    {
        return $this->logoUrl;
    }

    public function setLogoUrl(string $logoUrl): self
    {
        $this->logoUrl = $logoUrl;

        return $this;
    }

    /**
     * @return Collection|SDGRole[]
     */
    public function getSDGRoles(): Collection
    {
        return $this->sdgRoles;
    }

    public function addSDGRole(SDGRole $sdgRole): self
    {
        if (!$this->sdgRoles->contains($sdgRole)) {
            $this->sdgRoles[] = $sdgRole;
            $sdgRole->setSDG($this);
        }

        return $this;
    }

    public function removeSDGRole(SDGRole $sdgRole): self
    {
        if ($this->sdgRoles->contains($sdgRole)) {
            $this->sdgRoles->removeElement($sdgRole);
            // set the owning side to null (unless already changed)
            if ($sdgRole->getSDG() === $this) {
                $sdgRole->setSDG(null);
            }
        }

        return $this;
    }
}
