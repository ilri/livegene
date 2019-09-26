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
 *     collectionOperations={"get"={"method"="GET"}},
 *     itemOperations={"get"={"method"="GET"}},
 *     attributes={
 *         "normalization_context"={"groups"={"read"}},
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\AnimalSpeciesRepository")
 * @ORM\Table(name="app_animal_species")
 * @UniqueEntity("commonName")
 * @UniqueEntity("scientificName")
 */
class AnimalSpecies
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"read", "sampling"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30, unique=true)
     * @Assert\NotBlank()
     * @Groups({"read", "sampling"})
     */
    private $commonName;

    /**
     * @ORM\Column(type="string", length=50, unique=true)
     * @Assert\NotBlank()
     * @Groups({"read", "sampling"})
     */
    private $scientificName;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\SamplingActivity", mappedBy="animalSpecies")
     */
    private $samplingActivities;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\AnimalSpeciesRole", mappedBy="animalSpecies", orphanRemoval=true)
     */
    private $animalSpeciesRoles;

    public function __construct()
    {
        $this->samplingActivities = new ArrayCollection();
        $this->animalSpeciesRoles = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id ? sprintf('%s (%s)', $this->commonName, $this->scientificName) : '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCommonName(): ?string
    {
        return $this->commonName;
    }

    public function setCommonName(string $commonName): self
    {
        $this->commonName = $commonName;

        return $this;
    }

    public function getScientificName(): ?string
    {
        return $this->scientificName;
    }

    public function setScientificName(string $scientificName): self
    {
        $this->scientificName = $scientificName;

        return $this;
    }

    /**
     * @return Collection|SamplingActivity[]
     */
    public function getSamplingActivities(): Collection
    {
        return $this->samplingActivities;
    }

    public function addSamplingActivity(SamplingActivity $samplingActivity): self
    {
        if (!$this->samplingActivities->contains($samplingActivity)) {
            $this->samplingActivities[] = $samplingActivity;
            $samplingActivity->addAnimalSpecies($this);
        }

        return $this;
    }

    public function removeSamplingActivity(SamplingActivity $samplingActivity): self
    {
        if ($this->samplingActivities->contains($samplingActivity)) {
            $this->samplingActivities->removeElement($samplingActivity);
            $samplingActivity->removeAnimalSpecies($this);
        }

        return $this;
    }

    /**
     * @return Collection|AnimalSpeciesRole[]
     */
    public function getAnimalSpeciesRoles(): Collection
    {
        return $this->animalSpeciesRoles;
    }

    public function addAnimalSpeciesRole(AnimalSpeciesRole $animalSpeciesRole): self
    {
        if (!$this->animalSpeciesRoles->contains($animalSpeciesRole)) {
            $this->animalSpeciesRoles[] = $animalSpeciesRole;
            $animalSpeciesRole->setAnimalSpecies($this);
        }

        return $this;
    }

    public function removeAnimalSpeciesRole(AnimalSpeciesRole $animalSpeciesRole): self
    {
        if ($this->animalSpeciesRoles->contains($animalSpeciesRole)) {
            $this->animalSpeciesRoles->removeElement($animalSpeciesRole);
            // set the owning side to null (unless already changed)
            if ($animalSpeciesRole->getAnimalSpecies() === $this) {
                $animalSpeciesRole->setAnimalSpecies(null);
            }
        }

        return $this;
    }
}
