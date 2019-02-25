<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use App\Entity\Traits\RoleTrait;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\StaffRoleRepository")
 * @ORM\Table(
 *     name="app_staff_role",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_staff_member", columns={"project_id", "staff_member_id"})}
 * )
 * @UniqueEntity({"project", "staff_member"})
 */
class StaffRole
{
    use RoleTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="staffRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StaffMember", inversedBy="staffRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     */
    private $staffMember;

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
}
