<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Application\Sonata\MediaBundle\Entity\Media;
use App\Entity\Traits\ActiveTrait;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
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
 *                     "sampling_documentation:collection:get"
 *                 }
 *             }
 *         }
 *     },
 *     itemOperations={
 *         "get"={
 *             "method"="GET",
 *             "normalization_context"={
 *                 "groups"={
 *                     "sampling_documentation:item:get"
 *                 }
 *             }
 *         }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\SamplingDocumentationRepository")
 * @ORM\Table(name="app_sampling_documentation")
 */
class SamplingDocumentation
{
    use ActiveTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"sampling_documentation:collection:get", "sampling_collection:item:get"})
     */
    private ?int $id = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SamplingActivity", inversedBy="samplingDocumentations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private ?SamplingActivity $samplingActivity;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SamplingDocumentType", inversedBy="samplingDocumentations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private ?SamplingDocumentType $samplingDocumentType;

    /**
     * @ORM\OneToOne(targetEntity="App\Application\Sonata\MediaBundle\Entity\Media", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private ?Media $document;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country", inversedBy="samplingDocumentations")
     * @ORM\JoinColumn(nullable=true)
     */
    private ?Country $country;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private ?DateTimeInterface $startDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private ?DateTimeInterface $endDate;

    public function __toString()
    {
        return $this->id ? $this->document->getName() : '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSamplingActivity(): ?SamplingActivity
    {
        return $this->samplingActivity;
    }

    public function setSamplingActivity(?SamplingActivity $samplingActivity): self
    {
        $this->samplingActivity = $samplingActivity;

        return $this;
    }

    public function getSamplingDocumentType(): ?SamplingDocumentType
    {
        return $this->samplingDocumentType;
    }

    public function setSamplingDocumentType(?SamplingDocumentType $samplingDocumentType): self
    {
        $this->samplingDocumentType = $samplingDocumentType;

        return $this;
    }

    public function getDocument(): ?Media
    {
        return $this->document;
    }

    public function setDocument(Media $document): self
    {
        $this->document = $document;

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
}
