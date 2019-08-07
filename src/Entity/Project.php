<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;
use App\Validator\Constraints as AppAssert;
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
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 * @ORM\Table(name="app_project")
 * @UniqueEntity("ilriCode")
 * @AppAssert\StartDateBeforeEndDate()
 */
class Project
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"read", "role"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20, unique=true)
     * @Assert\NotBlank()
     * @Groups({"read", "role"})
     */
    private $ilriCode;

    /**
     * @ORM\Column(type="string", length=200)
     * @Assert\NotBlank()
     * @Groups({"read", "role"})
     */
    private $fullName;

    /**
     * @ORM\Column(type="string", length=50)
     * @Assert\NotBlank()
     * @Groups({"read", "role"})
     */
    private $shortName;

    /**
     * @ORM\Column(type="string", length=20)
     * @Assert\NotBlank()
     * @Groups({"read", "role"})
     */
    private $team;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StaffMember", inversedBy="projects")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $principalInvestigator;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $startDate;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $endDate;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Organisation", inversedBy="projects")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $donor;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"read"})
     */
    private $donorReference = '';

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $donorProjectName = '';

    /**
     * @ORM\Column(type="integer", options={"unsigned": true})
     * @Assert\Range(
     *     min=1
     * )
     * @Groups({"read"})
     */
    private $totalProjectValue;

    /**
     * @ORM\Column(type="integer", options={"unsigned": true})
     * @Assert\Expression(
     *     "this.getTotalIlriValue() <= this.getTotalProjectValue()",
     *     message="The total ILRI value must not exceed the total project value."
     * )
     * @Assert\Range(
     *     min=1
     * )
     * @Groups({"read"})
     */
    private $totalIlriValue;

    /**
     * @ORM\Column(type="integer", options={"unsigned": true})
     * @Assert\Expression(
     *     "this.getTotalLivegeneValue() <= this.getTotalProjectValue()",
     *     message="The total LiveGene value must not exceed the total project value."
     * )
     * @Assert\Range(
     *     min=1
     * )
     * @Groups({"read"})
     */
    private $totalLivegeneValue;

    /**
     * @ORM\Column(type="smallint", options={"unsigned": true, "default": 0})
     * @Assert\Range(
     *     min=0,
     *     max=100
     * )
     * @Groups({"read"})
     */
    private $status;

    /**
     * @ORM\Column(type="integer", options={"unsigned": true, "default": 0})
     * @Assert\Range(
     *    min=0,
     *    max=100
     * )
     * @Groups({"read"})
     */
    private $capacityDevelopment;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Partnership", mappedBy="project")
     */
    private $partnerships;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SamplingActivity", mappedBy="project")
     */
    private $samplingActivities;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StaffRole", mappedBy="project", cascade={"persist", "remove"})
     * @Groups({"read"})
     */
    private $staffRoles;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CountryRole", mappedBy="project", orphanRemoval=true, cascade={"persist", "remove"})
     * @Assert\Valid()
     */
    private $countryRoles;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SDGRole", mappedBy="project", orphanRemoval=true, cascade={"persist", "remove"})
     * @Assert\Valid()
     */
    private $sdgRoles;

    public function __construct()
    {
        $this->partnerships = new ArrayCollection();
        $this->samplingActivities = new ArrayCollection();
        $this->staffRoles = new ArrayCollection();
        $this->countryRoles = new ArrayCollection();
        $this->sdgRoles = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id
            ? sprintf('%s - %s', $this->ilriCode, $this->shortName)
            : ''
        ;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIlriCode(): ?string
    {
        return $this->ilriCode;
    }

    public function setIlriCode(string $ilriCode): self
    {
        $this->ilriCode = $ilriCode;

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

    public function getShortName(): ?string
    {
        return $this->shortName;
    }

    public function setShortName(string $shortName): self
    {
        $this->shortName = $shortName;

        return $this;
    }

    public function getTeam(): ?string
    {
        return $this->team;
    }

    public function setTeam(string $team): self
    {
        $this->team = $team;

        return $this;
    }

    public function getPrincipalInvestigator(): ?StaffMember
    {
        return $this->principalInvestigator;
    }

    public function setPrincipalInvestigator(?StaffMember $principalInvestigator): self
    {
        $this->principalInvestigator = $principalInvestigator;

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

    public function getDonor(): ?Organisation
    {
        return $this->donor;
    }

    public function setDonor(?Organisation $donor): self
    {
        $this->donor = $donor;

        return $this;
    }

    public function getDonorReference(): ?string
    {
        return $this->donorReference;
    }

    public function setDonorReference(?string $donorReference): self
    {
        $this->donorReference = $donorReference;

        return $this;
    }

    public function getDonorProjectName(): ?string
    {
        return $this->donorProjectName;
    }

    public function setDonorProjectName(?string $donorProjectName): self
    {
        $this->donorProjectName = $donorProjectName;

        return $this;
    }

    public function getTotalProjectValue(): ?int
    {
        return $this->totalProjectValue;
    }

    public function setTotalProjectValue(?int $totalProjectValue): self
    {
        $this->totalProjectValue = $totalProjectValue;

        return $this;
    }

    public function getTotalIlriValue(): ?int
    {
        return $this->totalIlriValue;
    }

    public function setTotalIlriValue(?int $totalIlriValue): self
    {
        $this->totalIlriValue = $totalIlriValue;

        return $this;
    }

    public function getTotalLivegeneValue(): ?int
    {
        return $this->totalLivegeneValue;
    }

    public function setTotalLivegeneValue(?int $totalLivegeneValue): self
    {
        $this->totalLivegeneValue = $totalLivegeneValue;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCapacityDevelopment(): ?int
    {
        return $this->capacityDevelopment;
    }

    public function setCapacityDevelopment(int $capacityDevelopment): self
    {
        $this->capacityDevelopment = $capacityDevelopment;

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
            $partnership->setProject($this);
        }

        return $this;
    }

    public function removePartnership(Partnership $partnership): self
    {
        if ($this->partnerships->contains($partnership)) {
            $this->partnerships->removeElement($partnership);
            // set the owning side to null (unless already changed)
            if ($partnership->getProject() === $this) {
                $partnership->setProject(null);
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
            $samplingActivity->setProject($this);
        }

        return $this;
    }

    public function removeSamplingActivity(SamplingActivity $samplingActivity): self
    {
        if ($this->samplingActivities->contains($samplingActivity)) {
            $this->samplingActivities->removeElement($samplingActivity);
            // set the owning side to null (unless already changed)
            if ($samplingActivity->getProject() === $this) {
                $samplingActivity->setProject(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StaffRole[]
     */
    public function getStaffRoles(): Collection
    {
        return $this->staffRoles;
    }

    public function addStaffRole(StaffRole $staffRole): self
    {
        if (!$this->staffRoles->contains($staffRole)) {
            $this->staffRoles[] = $staffRole;
            $staffRole->setProject($this);
        }

        return $this;
    }

    public function removeStaffRole(StaffRole $staffRole): self
    {
        if ($this->staffRoles->contains($staffRole)) {
            $this->staffRoles->removeElement($staffRole);
            // set the owning side to null (unless already changed)
            if ($staffRole->getProject() === $this) {
                $staffRole->setProject(null);
            }
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
            $countryRole->setProject($this);
        }

        return $this;
    }

    public function removeCountryRole(CountryRole $countryRole): self
    {
        if ($this->countryRoles->contains($countryRole)) {
            $this->countryRoles->removeElement($countryRole);
            // set the owning side to null (unless already changed)
            if ($countryRole->getProject() === $this) {
                $countryRole->setProject(null);
            }
        }

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
            $sdgRole->setProject($this);
        }

        return $this;
    }

    public function removeSDGRole(SDGRole $sdgRole): self
    {
        if ($this->sdgRoles->contains($sdgRole)) {
            $this->sdgRoles->removeElement($sdgRole);
            // set the owning side to null (unless already changed)
            if ($sdgRole->getProject() === $this) {
                $sdgRole->setProject(null);
            }
        }

        return $this;
    }

    /**
     * @Groups({"read"})
     */
    public function getTotalCountryRolesPercent(): float
    {
        return $this->calculateTotalPercent($this->getCountryRoles()->toArray());
    }

    /**
     * @Groups({"read"})
     */
    public function getTotalSDGRolesPercent(): int
    {
        return $this->calculateTotalPercent($this->getSDGRoles()->toArray());
    }

    private function calculateTotalPercent(array $roles): float
    {
        return array_reduce(
            $roles,
            function($carry, $item) {
                $carry += doubleval($item->getPercent());
                return $carry;
            },
            0
        );
    }

    /**
     * @Groups({"read"})
     */
    public function getIsActive(): bool
    {
        $now = new \DateTime('now');
        return $this->endDate >= $now && $this->startDate <= $now;
    }
}
