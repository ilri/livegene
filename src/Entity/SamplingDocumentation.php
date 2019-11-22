<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Application\Sonata\MediaBundle\Entity\Media;

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
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"sampling_documentation:collection:get", "sampling_collection:item:get"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SamplingActivity", inversedBy="samplingDocumentations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private $samplingActivity;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SamplingDocumentType", inversedBy="samplingDocumentations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private $samplingDocumentType;

    /**
     * @ORM\OneToOne(targetEntity="App\Application\Sonata\MediaBundle\Entity\Media", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"sampling_documentation:collection:get", "sampling_documentation:item:get"})
     */
    private $document;

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
}
