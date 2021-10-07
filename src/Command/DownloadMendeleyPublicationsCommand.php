<?php

namespace App\Command;

use App\Helper\MendeleyHelper;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class DownloadMendeleyPublicationsCommand extends Command
{
    protected static $defaultName = 'app:mendeley:download';
    protected static string $defaultDescription = 'Download all publications from the LiveGeneShare private group';

    private MendeleyHelper $mendeleyHelper;

    public function __construct(MendeleyHelper $mendeleyHelper, string $name = null)
    {
        $this->mendeleyHelper = $mendeleyHelper;

        parent::__construct($name);
    }

    protected function configure(): void
    {
        $this
            ->setName(self::$defaultName)
            ->setDescription(self::$defaultDescription)
            ->setHelp('Run the command to save the download in assets/spa/data/publications.json')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Download all publications from the LiveGeneShare private group from the Mendeley Reference Manager');

        $publications = $this->mendeleyHelper->getPublications();

        file_put_contents('assets/spa/data/publications.json', json_encode($publications, JSON_PRETTY_PRINT));

        $io->writeln(['<info>Download finished.</info>']);

        return 0;
    }
}
