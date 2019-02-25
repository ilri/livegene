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
 * @ORM\Entity(repositoryClass="App\Repository\SamplingActivityRepository")
 * @ORM\Table(
 *     name="app_sampling_activity",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_description", columns={"project_id", "description"})}
 * )
 * @UniqueEntity({"project", "description"})
 */
class SamplingActivity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="samplingActivities")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $project;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Organisation", inversedBy="samplingActivities")
     * @ORM\JoinTable(name="app_sampling_activity_organisation")
     * @Assert\Count(min=1)
     */
    private $samplingPartners;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\AnimalSpecies", inversedBy="samplingActivities")
     * @ORM\JoinTable(name="app_sampling_activity_animal_species")
     * @Assert\Count(min=1)
     */
    private $animalSpecies;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Country", inversedBy="samplingActivities")
     * @ORM\JoinTable(name="app_sampling_activity_country")
     * @Assert\Count(min=1)
     */
    private $countries;

    /**
     * @ORM\Column(type="string", length=200)
     * @Assert\NotBlank()
     */
    private $description;

    /**
     * @ORM\Column(type="date")
     */
    private $startDate;

    /**
     * @ORM\Column(type="date")
     */
    private $endDate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SamplingDocumentation", mappedBy="samplingActivity", cascade={"persist"})
     */
    private $samplingDocumentations;

    public function __construct()
    {
        $this->samplingPartners = new ArrayCollection();
        $this->animalSpecies = new ArrayCollection();
        $this->countries = new ArrayCollection();
        $this->samplingDocumentations = new ArrayCollection();
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

    /**
     * @return Collection|Organisation[]
     */
    public function getSamplingPartners(): Collection
    {
        return $this->samplingPartners;
    }

    public function addSamplingPartner(Organisation $samplingPartner): self
    {
        if (!$this->samplingPartners->contains($samplingPartner)) {
            $this->samplingPartners[] = $samplingPartner;
        }

        return $this;
    }

    public function removeSamplingPartner(Organisation $samplingPartner): self
    {
        if ($this->samplingPartners->contains($samplingPartner)) {
            $this->samplingPartners->removeElement($samplingPartner);
        }

        return $this;
    }

    /**
     * @return Collection|AnimalSpecies[]
     */
    public function getAnimalSpecies(): Collection
    {
        return $this->animalSpecies;
    }

    public function addAnimalSpecies(AnimalSpecies $animalSpecies): self
    {
        if (!$this->animalSpecies->contains($animalSpecies)) {
            $this->animalSpecies[] = $animalSpecies;
        }

        return $this;
    }

    public function removeAnimalSpecies(AnimalSpecies $animalSpecies): self
    {
        if ($this->animalSpecies->contains($animalSpecies)) {
            $this->animalSpecies->removeElement($animalSpecies);
        }

        return $this;
    }

    /**
     * @return Collection|Country[]
     */
    public function getCountries(): Collection
    {
        return $this->countries;
    }

    public function addCountry(Country $country): self
    {
        if (!$this->countries->contains($country)) {
            $this->countries[] = $country;
        }

        return $this;
    }

    public function removeCountry(Country $country): self
    {
        if ($this->countries->contains($country)) {
            $this->countries->removeElement($country);
        }

        return $this;
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

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * @return Collection|SamplingDocumentation[]
     */
    public function getSamplingDocumentations(): Collection
    {
        return $this->samplingDocumentations;
    }

    public function addSamplingDocumentation(SamplingDocumentation $samplingDocumentation): self
    {
        if (!$this->samplingDocumentations->contains($samplingDocumentation)) {
            $this->samplingDocumentations[] = $samplingDocumentation;
            $samplingDocumentation->setSamplingActivity($this);
        }

        return $this;
    }

    public function removeSamplingDocumentation(SamplingDocumentation $samplingDocumentation): self
    {
        if ($this->samplingDocumentations->contains($samplingDocumentation)) {
            $this->samplingDocumentations->removeElement($samplingDocumentation);
            // set the owning side to null (unless already changed)
            if ($samplingDocumentation->getSamplingActivity() === $this) {
                $samplingDocumentation->setSamplingActivity(null);
            }
        }

        return $this;
    }
}
