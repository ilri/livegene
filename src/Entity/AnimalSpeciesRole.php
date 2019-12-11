<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use App\Validator\Constraints as AppAssert;
use App\Entity\Traits\RoleTrait;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     attributes={
 *         "security"="is_granted('ROLE_API_USER')"
 *     },
 *     collectionOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "animal_species_role:collection:get"
 *                 }
 *             }
 *         }
 *     },
 *     itemOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "animal_species_role:item:get"
 *                 }
 *             }
 *         }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\AnimalSpeciesRoleRepository")
 * @ORM\Table(
 *     name="app_animal_species_role",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_animalspecies", columns={"project_id","animal_species_id"})}
 * )
 * @UniqueEntity({"project","animalSpecies"})
 * @AppAssert\Percent()
 */
class AnimalSpeciesRole
{
    use RoleTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"animal_species_role:collection:get", "animal_species_role:item:get"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="animalSpeciesRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal_species_role:collection:get", "animal_species_role:item:get"})
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnimalSpecies", inversedBy="animalSpeciesRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal_species_role:collection:get", "animal_species_role:item:get"})
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
