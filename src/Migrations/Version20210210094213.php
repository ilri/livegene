<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210210094213 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_sampling_documentation ADD start_date DATE DEFAULT NULL, ADD end_date DATE DEFAULT NULL, DROP valid_from, DROP valid_to');
        $this->addSql('ALTER TABLE app_sampling_documentation_audit ADD start_date DATE DEFAULT NULL, ADD end_date DATE DEFAULT NULL, DROP valid_from, DROP valid_to');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_sampling_documentation ADD valid_from DATE DEFAULT NULL, ADD valid_to DATE DEFAULT NULL, DROP start_date, DROP end_date');
        $this->addSql('ALTER TABLE app_sampling_documentation_audit ADD valid_from DATE DEFAULT NULL, ADD valid_to DATE DEFAULT NULL, DROP start_date, DROP end_date');
    }
}
