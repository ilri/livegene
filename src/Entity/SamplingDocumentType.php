<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
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
 *                     "sampling_document_type:collection:get"
 *                 }
 *             }
 *         }
 *     },
 *     itemOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "sampling_document_type:item:get"
 *                 }
 *             }
 *         }
 *     },
 *     attributes={
 *         "normalization_context"={"groups"={"read"}},
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\SamplingDocumentTypeRepository")
 * @ORM\Table(name="app_sampling_document_type")
 * @UniqueEntity("shortName")
 */
class SamplingDocumentType
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"sampling_document_type:collection:get", "sampling_document_type:item:get"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30, unique=true)
     * @Assert\NotBlank()
     * @Groups({"sampling_document_type:collection:get", "sampling_document_type:item:get"})
     */
    private $shortName;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank()
     * @Groups({"sampling_document_type:collection:get", "sampling_document_type:item:get"})
     */
    private $longName;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SamplingDocumentation", mappedBy="samplingDocumentType")
     */
    private $samplingDocumentations;

    public function __construct()
    {
        $this->samplingDocumentations = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->id ? $this->shortName : '';
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getLongName(): ?string
    {
        return $this->longName;
    }

    public function setLongName(string $longName): self
    {
        $this->longName = $longName;

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
            $samplingDocumentation->setSamplingDocumentType($this);
        }

        return $this;
    }

    public function removeSamplingDocumentation(SamplingDocumentation $samplingDocumentation): self
    {
        if ($this->samplingDocumentations->contains($samplingDocumentation)) {
            $this->samplingDocumentations->removeElement($samplingDocumentation);
            // set the owning side to null (unless already changed)
            if ($samplingDocumentation->getSamplingDocumentType() === $this) {
                $samplingDocumentation->setSamplingDocumentType(null);
            }
        }

        return $this;
    }
}
