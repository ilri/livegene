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
use App\Validator\Constraints as AppAssert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PartnershipRepository")
 * @ORM\Table(
 *     name="app_partnership",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_partner", columns={"project_id", "partner_id"})}
 * )
 * @UniqueEntity({"project", "partner"})
 * @AppAssert\StartDateBeforeEndDate()
 * @AppAssert\ChildDateRangeWithinParentDateRange()
 */
class Partnership
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="partnerships")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Organisation", inversedBy="partnerships")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $partner;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $startDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $endDate;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Contact", inversedBy="partnerships")
     * @ORM\JoinTable(name="app_partnership_contact")
     */
    private $contacts;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PartnershipType", inversedBy="partnerships")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $partnershipType;

    public function __construct()
    {
        $this->contacts = new ArrayCollection();
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

    public function getPartner(): ?Organisation
    {
        return $this->partner;
    }

    public function setPartner(?Organisation $partner): self
    {
        $this->partner = $partner;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        if ($this->id) {
            return $this->startDate ?: $this->project->getStartDate();
        }

        return $this->startDate;
    }

    public function setStartDate(?\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        if ($this->id) {
            return $this->endDate ?: $this->project->getEndDate();
        }

        return $this->endDate;
    }

    public function setEndDate(?\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * @return Collection|Contact[]
     */
    public function getContacts(): Collection
    {
        return $this->contacts;
    }

    public function addContact(Contact $contact): self
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts[] = $contact;
        }

        return $this;
    }

    public function removeContact(Contact $contact): self
    {
        if ($this->contacts->contains($contact)) {
            $this->contacts->removeElement($contact);
        }

        return $this;
    }

    public function getPartnershipType(): ?PartnershipType
    {
        return $this->partnershipType;
    }

    public function setPartnershipType(?PartnershipType $partnershipType): self
    {
        $this->partnershipType = $partnershipType;

        return $this;
    }
}
