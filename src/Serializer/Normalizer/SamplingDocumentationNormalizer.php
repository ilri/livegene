<?php

namespace App\Serializer\Normalizer;

use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\SerializerAwareInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use App\Entity\SamplingDocumentation;

class SamplingDocumentationNormalizer implements NormalizerInterface, DenormalizerInterface, SerializerAwareInterface
{
    private $decorated;
    private $router;

    public function __construct(NormalizerInterface $decorated, UrlGeneratorInterface $router)
    {
        if (!$decorated instanceof DenormalizerInterface) {
            throw new \InvalidArgumentException(sprintf('The decorated normalizer must implement the %s.', DenormalizerInterface::class));
        }

        $this->decorated = $decorated;
        $this->router = $router;
    }

    public function supportsNormalization($data, $format = null): bool
    {
        return $data instanceof SamplingDocumentation;
    }

    public function normalize($object, $format = null, array $context = []): array
    {
        $data = $this->decorated->normalize($object, $format, $context);

        $media = $object->getDocument();
        $url = $this->router->generate(
            'sonata_media_download',
            ['id' => $media->getId()]
        );
        $data['document'] = $url;

        return $data;
    }

    public function supportsDenormalization($data, $type, $format = null)
    {
        return $this->decorated->supportsDenormalization($data, $type, $format);
    }

    public function denormalize($data, $class, $format = null, array $context = [])
    {
        return $this->decorated->denormalize($data, $class, $format, $context);
    }

    public function setSerializer(SerializerInterface $serializer)
    {
        if($this->decorated instanceof SerializerAwareInterface) {
            $this->decorated->setSerializer($serializer);
        }
    }
}
