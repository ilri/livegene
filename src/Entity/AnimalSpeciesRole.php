<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\AnimalSpeciesRoleRepository")
 */
class AnimalSpeciesRole
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="animalSpeciesRoles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnimalSpecies", inversedBy="animalSpeciesRoles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $animalSpecies;

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

    public function getAnimalSpecies(): ?AnimalSpecies
    {
        return $this->animalSpecies;
    }

    public function setAnimalSpecies(?AnimalSpecies $animalSpecies): self
    {
        $this->animalSpecies = $animalSpecies;

        return $this;
    }
}
