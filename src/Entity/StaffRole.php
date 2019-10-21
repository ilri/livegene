<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;
use App\Validator\Constraints as AppAssert;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Traits\RoleTrait;

/**
 * @ApiResource(
 *     collectionOperations={"get"={"method"="GET"}},
 *     itemOperations={"get"={"method"="GET"}},
 *     attributes={
 *         "normalization_context"={"groups"={"role"}},
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\StaffRoleRepository")
 * @ORM\Table(
 *     name="app_staff_role",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="project_staff_member", columns={"project_id", "staff_member_id"})}
 * )
 * @UniqueEntity({"project", "staffMember"})
 * @AppAssert\Percent()
 */
class StaffRole
{
    use RoleTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"role", "read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="staffRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"role"})
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StaffMember", inversedBy="staffRoles")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"role", "read"})
     */
    private $staffMember;

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
}
