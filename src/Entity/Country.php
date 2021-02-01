<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\{
    ApiProperty,
    ApiResource
};
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Intl\Intl;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

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
 *                     "country:collection:get"
 *                 }
 *             }
 *         }
 *     },
 *     itemOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "country:item:get"
 *                 }
 *             }
 *         }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\CountryRepository")
 * @ORM\Table(name="app_country")
 * @UniqueEntity("country")
 */
class Country
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @ApiProperty(identifier=false)
     * @Groups({
     *     "country:collection:get", "country:item:get",
     *     "organisation:collection:get", "organisation:item:get",
     *     "project:collection:get", "project:item:get",
     *     "sampling_activity:collection:get", "sampling_activity:item:get",
     * })
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=2, unique=true)
     * @Assert\NotBlank()
     * @Assert\Country()
     * @ApiProperty(identifier=true)
     * @Groups({
     *     "country:collection:get", "country:item:get",
     *     "organisation:collection:get", "organisation:item:get",
     *     "project:collection:get", "project:item:get",
     *     "sampling_activity:collection:get", "sampling_activity:item:get"
     * })
     */
    private $country;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Organisation", mappedBy="country")
     */
    private $organisations;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\SamplingActivity", mappedBy="countries")
     */
    private $samplingActivities;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CountryRole", mappedBy="country", cascade={"persist", "remove"})
     */
    private $countryRoles;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SamplingDocumentation", mappedBy="country")
     */
    private $samplingDocumentations;

    public function __construct()
    {
        $this->organisations = new ArrayCollection();
        $this->samplingActivities = new ArrayCollection();
        $this->countryRoles = new ArrayCollection();
        $this->samplingDocumentations = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id ? $this->getCountryName() : '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    /**
     * @Groups({
     *     "country:collection:get", "country:item:get",
     *     "organisation:collection:get", "organisation:item:get",
     *     "project:collection:get", "project:item:get",
     *     "sampling_activity:collection:get", "sampling_activity:item:get"
     * })
     */
    public function getCountryName()
    {
        return Intl::getRegionBundle()->getCountryName($this->getCountry());
    }

    /**
     * @return Collection|Organisation[]
     */
    public function getOrganisations(): Collection
    {
        return $this->organisations;
    }

    public function addOrganisation(Organisation $organisation): self
    {
        if (!$this->organisations->contains($organisation)) {
            $this->organisations[] = $organisation;
            $organisation->setCountry($this);
        }

        return $this;
    }

    public function removeOrganisation(Organisation $organisation): self
    {
        if ($this->organisations->contains($organisation)) {
            $this->organisations->removeElement($organisation);
            // set the owning side to null (unless already changed)
            if ($organisation->getCountry() === $this) {
                $organisation->setCountry(null);
            }
        }

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
            $samplingActivity->addCountry($this);
        }

        return $this;
    }

    public function removeSamplingActivity(SamplingActivity $samplingActivity): self
    {
        if ($this->samplingActivities->contains($samplingActivity)) {
            $this->samplingActivities->removeElement($samplingActivity);
            $samplingActivity->removeCountry($this);
        }

        return $this;
    }

    /**
     * @return Collection|CountryRole[]
     */
    public function getCountryRoles(): Collection
    {
        return $this->countryRoles;
    }

    public function addCountryRole(CountryRole $countryRole): self
    {
        if (!$this->countryRoles->contains($countryRole)) {
            $this->countryRoles[] = $countryRole;
            $countryRole->setCountry($this);
        }

        return $this;
    }

    public function removeCountryRole(CountryRole $countryRole): self
    {
        if ($this->countryRoles->contains($countryRole)) {
            $this->countryRoles->removeElement($countryRole);
            // set the owning side to null (unless already changed)
            if ($countryRole->getCountry() === $this) {
                $countryRole->setCountry(null);
            }
        }

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
            $samplingDocumentation->setCountry($this);
        }

        return $this;
    }

    public function removeSamplingDocumentation(SamplingDocumentation $samplingDocumentation): self
    {
        if ($this->samplingDocumentations->removeElement($samplingDocumentation)) {
            // set the owning side to null (unless already changed)
            if ($samplingDocumentation->getCountry() === $this) {
                $samplingDocumentation->setCountry(null);
            }
        }

        return $this;
    }
}
