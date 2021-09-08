<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Validator\Constraints as AppAssert;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     attributes={
 *         "security"="is_granted('ROLE_API_USER')"
 *     },
 *     collectionOperations={"get"={"method"="GET"}},
 *     itemOperations={"get"={"method"="GET"}},
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ExpenditureRepository")
 * @ORM\Table(name="app_expenditure")
 * @AppAssert\StartDateBeforeEndDate()
 */
class Expenditure
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=20)
     * @Assert\NotBlank()
     */
    private ?string $ilriCode;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     */
    private ?string $name;

    /**
     * @ORM\Column(type="string", length=20)
     * @Assert\NotBlank()
     */
    private ?string $homeProgram;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank()
     */
    private ?DateTimeInterface $startDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?DateTimeInterface $endDate;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\NotBlank()
     */
    private ?DateTimeInterface $reportDate;

    /**
     * @ORM\Column(type="integer", nullable=true, options={"unsigned": true})
     * @Assert\Range(
     *     min=0
     * )
     */
    private ?int $totalBudget;

    /**
     * @ORM\Column(type="integer", nullable=true, options={"unsigned": true})
     * @Assert\Range(
     *     min=0
     * )
     */
    private ?int $amount;

    public function __toString()
    {
        return $this->id
            ? sprintf('%s - %s', $this->ilriCode, $this->reportDate->format('Y-m-d H:i:s'))
            : ''
        ;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIlriCode(): ?string
    {
        return $this->ilriCode;
    }

    public function setIlriCode(string $ilriCode): self
    {
        $this->ilriCode = $ilriCode;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getHomeProgram(): ?string
    {
        return $this->homeProgram;
    }

    public function setHomeProgram(string $homeProgram): self
    {
        $this->homeProgram = $homeProgram;

        return $this;
    }

    public function getStartDate(): ?DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(DateTimeInterface $startDate): self
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

    public function getReportDate(): ?DateTimeInterface
    {
        return $this->reportDate;
    }

    public function setReportDate(DateTimeInterface $reportDate): self
    {
        $this->reportDate = $reportDate;

        return $this;
    }

    public function getTotalBudget(): ?int
    {
        return $this->totalBudget;
    }

    public function setTotalBudget(?int $totalBudget): self
    {
        $this->totalBudget = $totalBudget;

        return $this;
    }

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(?int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }
}
