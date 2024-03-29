<?php

namespace App\Command;

use App\Exception\CacheItemNotFoundException;
use App\Mailer\NewPublicationsMailer;
use App\Repository\Mendeley\PublicationRepository;
use App\Repository\StaffMemberRepository;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Twig\Error\{
    LoaderError,
    RuntimeError,
    SyntaxError,
};

class MendeleyNewPublicationsNotifierCommand extends Command
{
    private const HOME_PROGRAM = 'LiveGene';
    private const PERIOD = '-1 week';

    protected static $defaultName = 'app:mendeley:new-publications-notifier';
    protected static string $defaultDescription = 'Notify staff members from Home Program LiveGene about new publications';

    private StaffMemberRepository $staffMemberRepository;
    private PublicationRepository $publicationRepository;
    private NewPublicationsMailer $newPublicationsMailer;

    public function __construct(
        StaffMemberRepository $staffMemberRepository,
        PublicationRepository $publicationRepository,
        NewPublicationsMailer $newPublicationsMailer,
        string $name = null
    ) {
        parent::__construct($name);

        $this->staffMemberRepository = $staffMemberRepository;
        $this->publicationRepository = $publicationRepository;
        $this->newPublicationsMailer = $newPublicationsMailer;
    }

    protected function configure(): void
    {
        $this
            ->setName(self::$defaultName)
            ->setDescription(self::$defaultDescription)
            ->setHelp('Run the command to notify staff members from Home Program LiveGene about new publications.')
        ;
    }

    /**
     * @param   InputInterface   $input
     * @param   OutputInterface  $output
     *
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $isoDate = (new \DateTime(self::PERIOD))->format('c');
        try {
            $newPublications = $this->publicationRepository->getPublicationsModifiedSince($isoDate);
            $publications = array_filter(
                $newPublications,
                function($publication) use ($isoDate) {
                    $created = (new \DateTime($publication['created']))->format('c');
                    return $created > $isoDate;
                }
            );
        } catch  (GuzzleException | CacheItemNotFoundException | \Exception $e) {
            $io->writeln([sprintf('<error>%s</error>', $e->getMessage())]);
            return 1;
        }

        if ($publications) {
            $liveGeneStaff = $this->staffMemberRepository
                ->findActiveStaffByHomeProgram(self::HOME_PROGRAM)
            ;
            $emailAddresses = array_map(
                function ($staffMember) {
                    return $staffMember->getEmail();
                }, $liveGeneStaff
            );

            try {
                $this->newPublicationsMailer->sendNewPublicationsNotificationMessage(
                    $emailAddresses,
                    $publications,
                );
            } catch (LoaderError | RuntimeError | SyntaxError $e) {
                $io->writeln([sprintf('<error>%s</error>', $e->getMessage())]);
                return 1;
            }
        }

        return 0;
    }
}
