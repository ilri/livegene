<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\{
    ArrayCollection,
    Collection
};
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use App\Entity\Traits\PersonTrait;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ContactRepository")
 * @ORM\Table(name="app_contact")
 */
class Contact
{
    use PersonTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\Email(mode="strict")
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $phone;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Partnership", mappedBy="contacts")
     */
    private $partnerships;

    public function __construct()
    {
        $this->partnerships = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = strtolower($email);

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

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
            $partnership->addContact($this);
        }

        return $this;
    }

    public function removePartnership(Partnership $partnership): self
    {
        if ($this->partnerships->contains($partnership)) {
            $this->partnerships->removeElement($partnership);
            $partnership->removeContact($this);
        }

        return $this;
    }
}
