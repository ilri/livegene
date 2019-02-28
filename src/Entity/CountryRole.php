<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use App\Validator\Constraints as AppAssert;
use App\Entity\Traits\RoleTrait;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\CountryRoleRepository")
 * @ORM\Table(
 *     name="app_country_role",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_country", columns={"project_id", "country_id"})}
 * )
 * @UniqueEntity({"project", "country"})
 * @AppAssert\Percent()
 */
class CountryRole
{
    use RoleTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="countryRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country", inversedBy="countryRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $country;

    public function __toString()
    {
        return $this->id
            ? sprintf('%s - %s', $this->project, $this->country)
            : ''
        ;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function getCountry(): ?Country
    {
        return $this->country;
    }

    public function setCountry(?Country $country): self
    {
        $this->country = $country;

        return $this;
    }
}
