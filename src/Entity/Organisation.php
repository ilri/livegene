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
 *     attributes={
 *         "security"="is_granted('ROLE_API_USER')"
 *     },
 *     collectionOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "organisation:collection:get"
 *                 }
 *             }
 *         }
 *     },
 *     itemOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "organisation:item:get"
 *                 }
 *             }
 *         }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\OrganisationRepository")
 * @ORM\Table(name="app_organisation")
 * @UniqueEntity("fullName")
 */
class Organisation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private $shortName = '';

    /**
     * @ORM\Column(type="string", length=200)
     * @Assert\NotBlank()
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private $fullName;

    /**
     * @ORM\Column(type="string", length=200)
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private $localName = '';

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Url()
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private $link = '';

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Url()
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private $logoUrl = '';

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country", inversedBy="organisations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private $country;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Project", mappedBy="donor")
     */
    private $projects;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Partnership", mappedBy="partner")
     */
    private $partnerships;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\SamplingActivity", mappedBy="samplingPartners")
     */
    private $samplingActivities;

    public function __construct()
    {
        $this->projects = new ArrayCollection();
        $this->partnerships = new ArrayCollection();
        $this->samplingActivities = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id
            ? sprintf('%s (%s)', $this->fullName, $this->shortName)
            : ''
        ;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getShortName(): ?string
    {
        return $this->shortName;
    }

    public function setShortName(?string $shortName): self
    {
        $this->shortName = $shortName;

        return $this;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): self
    {
        $this->fullName = $fullName;

        if ('' === $fullName && '' != $this->localName) {
            $this->fullName = $this->localName;
        }

        return $this;
    }

    public function getLocalName(): ?string
    {
        return $this->localName;
    }

    public function setLocalName(?string $localName): self
    {
        $this->localName = $localName;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
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

    public function getCountry(): ?Country
    {
        return $this->country;
    }

    public function setCountry(?Country $country): self
    {
        $this->country = $country;

        return $this;
    }

    /**
     * @return Collection|Project[]
     */
    public function getProjects(): Collection
    {
        return $this->projects;
    }

    public function addProject(Project $project): self
    {
        if (!$this->projects->contains($project)) {
            $this->projects[] = $project;
            $project->setDonor($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->contains($project)) {
            $this->projects->removeElement($project);
            // set the owning side to null (unless already changed)
            if ($project->getDonor() === $this) {
                $project->setDonor(null);
            }
        }

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
            $partnership->setPartner($this);
        }

        return $this;
    }

    public function removePartnership(Partnership $partnership): self
    {
        if ($this->partnerships->contains($partnership)) {
            $this->partnerships->removeElement($partnership);
            // set the owning side to null (unless already changed)
            if ($partnership->getPartner() === $this) {
                $partnership->setPartner(null);
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
            $samplingActivity->addSamplingPartner($this);
        }

        return $this;
    }

    public function removeSamplingActivity(SamplingActivity $samplingActivity): self
    {
        if ($this->samplingActivities->contains($samplingActivity)) {
            $this->samplingActivities->removeElement($samplingActivity);
            $samplingActivity->removeSamplingPartner($this);
        }

        return $this;
    }
}
