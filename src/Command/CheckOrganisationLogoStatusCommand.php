<?php

namespace App\Command;

use ApiPlatform\Core\Bridge\Symfony\Identifier\Normalizer\UlidNormalizer;
use App\Repository\OrganisationRepository;
use App\Validator\Constraints\UrlIsAccessible;
use App\Validator\Constraints\UrlIsImage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CheckOrganisationLogoStatusCommand extends Command
{
    protected static $defaultName = 'app:organisation:check-logo-status';
    protected static string $defaultDescription = 'Check the status codes of the Organisation logos';

    private OrganisationRepository $organisationRepository;
    private ValidatorInterface $validator;
    private EntityManagerInterface $em;

    public function __construct(OrganisationRepository $organisationRepository, ValidatorInterface $validator, EntityManagerInterface $em, string $name = null)
    {
        parent::__construct($name);

        $this->organisationRepository = $organisationRepository;
        $this->validator = $validator;
        $this->em = $em;
    }

    protected function configure(): void
    {
        $this
            ->setName(self::$defaultName)
            ->setDescription(self::$defaultDescription)
            ->setHelp('Run the command to check the status codes of the Organisation logos')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title(self::$defaultDescription);

        $organisations = $this->organisationRepository->findAll();

        foreach ($organisations as $organisation) {
            if ($organisation->getLogoUrl()) {
                $constraints = [
                    new UrlIsAccessible(),
                    new UrlIsImage(),
                ];
                $errors = $this->validator->validate(
                    $organisation->getLogoUrl(),
                    $constraints,
                );

                if (0 === count($errors)) {
                    $organisation->setLogoStatus(true);
                } else {
                    $organisation->setLogoStatus(false);
                }
            }

            $this->em->persist($organisation);
        }

        $this->em->flush();

        return 0;
    }
}
