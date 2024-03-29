<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Validator as AppAssert;
use Doctrine\Common\Collections\{
    ArrayCollection,
    Collection,
};
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     attributes={
 *         "security"="is_granted('ROLE_SPA_USER')"
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
 * @Assert\GroupSequence({"Organisation", "Access", "Value"})
 */
class Organisation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private string $shortName = '';

    /**
     * @ORM\Column(type="string", length=200)
     * @Assert\NotBlank(groups={"Organisation"})
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private ?string $fullName;

    /**
     * @ORM\Column(type="string", length=200)
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private string $localName = '';

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Url(groups={"Organisation"})
     * @AppAssert\UrlIsAccessible(groups={"Access"})
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private string $link = '';

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Url(groups={"Organisation"})
     * @AppAssert\UrlIsAccessible(groups={"Access"})
     * @AppAssert\UrlIsImage(groups={"Value"})
     */
    private string $logoUrl = '';

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country", inversedBy="organisations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank(groups={"Organisation"})
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private ?Country $country;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Project", mappedBy="donor")
     */
    private Collection $projects;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Partnership", mappedBy="partner")
     */
    private Collection $partnerships;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\SamplingActivity", mappedBy="samplingPartners")
     */
    private Collection $samplingActivities;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(
     *     max=1048576,
     *     maxMessage="The logo image is too big. Please use a smaller image.",
     *     groups={"Value"}
     * )
     * @Groups({"organisation:collection:get", "organisation:item:get"})
     */
    private ?string $encodedLogo;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private ?bool $logoStatus;

    /**
     * @ORM\Column(type="string", length=7)
     * @Groups({"organisation:collection:get", "organisation:item:get", "project:collection:get", "project:item:get"})
     */
    private ?string $logoBackgroundColor;

    public function __construct()
    {
        $this->projects = new ArrayCollection();
        $this->partnerships = new ArrayCollection();
        $this->samplingActivities = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id
            ? $this->fullName
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

    public function setLogoUrl(?string $logoUrl): self
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

    public function getEncodedLogo(): ?string
    {
        return $this->encodedLogo;
    }

    public function setEncodedLogo(?string $encodedLogo): self
    {
        $this->encodedLogo = $encodedLogo;

        return $this;
    }

    public function getLogoStatus(): ?bool
    {
        return $this->logoStatus;
    }

    public function setLogoStatus(?bool $logoStatus): self
    {
        $this->logoStatus = $logoStatus;

        return $this;
    }

    public function getLogoBackgroundColor(): ?string
    {
        return $this->logoBackgroundColor;
    }

    public function setLogoBackgroundColor(string $logoBackgroundColor): self
    {
        $this->logoBackgroundColor = strtoupper($logoBackgroundColor);

        return $this;
    }
}
