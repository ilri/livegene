<?php

namespace App\Command;

use App\Exception\CacheItemNotFoundException;
use App\Repository\Mendeley\PublicationCachedRepository;
use GuzzleHttp\Exception\GuzzleException;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class DownloadMendeleyPublicationsCommand extends Command
{
    protected static $defaultName = 'app:mendeley:download';
    protected static string $defaultDescription = 'Download all publications from the LiveGeneShare private group';

    private PublicationCachedRepository $publicationCachedRepository;

    public function __construct(PublicationCachedRepository $publicationCachedRepository, string $name = null)
    {
        $this->publicationCachedRepository = $publicationCachedRepository;

        parent::__construct($name);
    }

    protected function configure(): void
    {
        $this
            ->setName(self::$defaultName)
            ->setDescription(self::$defaultDescription)
            ->setHelp('Run the command to fetch the publications from the Mendeley API.')
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

        $io->title('Download all publications from the LiveGeneShare private group from the Mendeley Reference Manager');

        try {
            $this->publicationCachedRepository->setPublications();
        } catch (GuzzleException | CacheItemNotFoundException $e) {
            $io->writeln([sprintf('<error>%s</error>', $e->getMessage())]);
            return 1;
        }

        $io->writeln(['<info>Download finished.</info>']);

        return 0;
    }
}
