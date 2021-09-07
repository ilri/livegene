<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\Traits\RoleTrait;
use App\Validator\Constraints as AppAssert;
use Carbon\Carbon;
use DateTimeInterface;
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
 *                     "staff_role:collection:get"
 *                 }
 *             }
 *         }
 *     },
 *     itemOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "staff_role:item:get"
 *                 }
 *             }
 *         }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\StaffRoleRepository")
 * @ORM\Table(
 *     name="app_staff_role",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_staff_member", columns={"project_id", "staff_member_id"})}
 * )
 * @UniqueEntity({"project", "staffMember"})
 * @AppAssert\Percent()
 * @AppAssert\StartDateBeforeEndDate()
 * @AppAssert\ChildDateRangeWithinParentDateRange()
 */
class StaffRole
{
    use RoleTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"staff_role:collection:get", "staff_role:item:get", "project:collection:get", "project:item:get"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="staffRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"staff_role:collection:get", "staff_role:item:get"})
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StaffMember", inversedBy="staffRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"staff_role:collection:get", "staff_role:item:get", "project:collection:get", "project:item:get"})
     */
    private ?StaffMember $staffMember;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"staff_role:collection:get", "staff_role:item:get", "project:collection:get", "project:item:get"})
     */
    private ?DateTimeInterface $startDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"staff_role:collection:get", "staff_role:item:get", "project:collection:get", "project:item:get"})
     */
    private ?DateTimeInterface $endDate;

    /**
     * @var bool
     *
     * @Groups({"staff_role:collection:get", "staff_role:item:get", "project:collection:get", "project:item:get"})
     */
    private bool $isActive;

    public function __toString()
    {
        return $this->id
            ? sprintf('%s - %s', $this->staffMember, $this->project)
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

    public function getStaffMember(): ?StaffMember
    {
        return $this->staffMember;
    }

    public function setStaffMember(?StaffMember $staffMember): self
    {
        $this->staffMember = $staffMember;

        return $this;
    }

    public function getStartDate(): ?DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(?DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(?DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getIsActive(): bool
    {
        $now = Carbon::now();
        if ($this->getProject() && !$this->getStartDate() && !$this->getEndDate()) {
            return $this->getProject()->getIsActive();
        } elseif (!$this->getStartDate() && $this->getEndDate()) {
            return $this->getEndDate() >= $now;
        } elseif ($this->getStartDate() && !$this->getEndDate()) {
            return $this->getStartDate() <= $now;
        } elseif ($this->getStartDate() && $this->getEndDate()) {
            return $this->getEndDate() >= $now && $this->getStartDate() <= $now;
        } else {
            return false;
        }
    }
}
