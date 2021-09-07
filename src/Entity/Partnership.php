<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Validator\Constraints as AppAssert;
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
 *         "security"="is_granted('ROLE_API_USER')"
 *     },
 *     collectionOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "partnership:collection:get"
 *                 }
 *             }
 *         }
 *     },
 *     itemOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "partnership:item:get"
 *                 }
 *             }
 *         }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\PartnershipRepository")
 * @ORM\Table(
 *     name="app_partnership",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_partner", columns={"project_id", "partner_id", "partnership_type_id"})}
 * )
 * @UniqueEntity({"project", "partner", "partnershipType"})
 * @AppAssert\StartDateBeforeEndDate()
 * @AppAssert\ChildDateRangeWithinParentDateRange()
 */
class Partnership
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"partnership:collection:get", "partnership:item:get"})
     * @Groups({"project:collection:get", "project:item:get"})
     */
    private ?int $id = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="partnerships")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"partnership:collection:get", "partnership:item:get"})
     */
    private ?Project $project = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Organisation", inversedBy="partnerships")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"partnership:collection:get", "partnership:item:get", "project:collection:get", "project:item:get"})
     */
    private ?Organisation $partner;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"partnership:collection:get", "partnership:item:get"})
     */
    private ?\DateTimeInterface $startDate = null;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"partnership:collection:get", "partnership:item:get"})
     */
    private ?\DateTimeInterface $endDate = null;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Contact", inversedBy="partnerships")
     * @ORM\JoinTable(name="app_partnership_contact")
     * @Groups({"partnership:collection:get", "partnership:item:get"})
     */
    private Collection $contacts;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PartnershipType", inversedBy="partnerships")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"partnership:collection:get", "partnership:item:get", "project:collection:get", "project:item:get"})
     */
    private ?PartnershipType $partnershipType;

    public function __construct()
    {
        $this->contacts = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id
            ? sprintf('%s - %s', $this->project, $this->partner)
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
        if ($this->getProject()) {
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
        if ($this->getProject()) {
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
