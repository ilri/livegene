<?php

namespace App\Command;

use App\Repository\StaffMemberRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class MendeleyNewPublicationsNotifierCommand extends Command
{
    private const HOME_PROGRAM = 'LiveGene';

    protected static $defaultName = 'app:mendeley:new-publications-notifier';
    protected static string $defaultDescription = 'Notify staff members from Home Program LiveGene about new publications';

    private StaffMemberRepository $staffMemberRepository;

    public function __construct(StaffMemberRepository $staffMemberRepository, string $name = null)
    {
        parent::__construct($name);

        $this->staffMemberRepository = $staffMemberRepository;
    }

    protected function configure(): void
    {
        $this
            ->setName(self::$defaultName)
            ->setDescription(self::$defaultDescription)
            ->setHelp('Run the command to notify staff members from Home Program LiveGene about new publications.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $liveGeneStaff = $this->staffMemberRepository
            ->findByHomeProgram(self::HOME_PROGRAM)
        ;

        $io->progressStart(count($liveGeneStaff));
        foreach ($liveGeneStaff as $staffMember) {
            $io->progressAdvance();
        }
        $io->progressFinish();

        return 0;
    }
}
