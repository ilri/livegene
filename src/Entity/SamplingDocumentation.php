<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Application\Sonata\MediaBundle\Entity\Media;

/**
 * @ApiResource(
 *     collectionOperations={"get"={"method"="GET"}},
 *     itemOperations={"get"={"method"="GET"}},
 *     attributes={
 *         "normalization_context"={"groups"={"read"}},
 *     }
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
     * @Groups({"read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SamplingActivity", inversedBy="samplingDocumentations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $samplingActivity;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SamplingDocumentType", inversedBy="samplingDocumentations")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"read"})
     */
    private $samplingDocumentType;

    /**
     * @ORM\OneToOne(targetEntity="App\Application\Sonata\MediaBundle\Entity\Media", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank()
     * @Groups({"read"})
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
