<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210201115201 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_sampling_documentation ADD country_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE app_sampling_documentation ADD CONSTRAINT FK_6EA62BC0F92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id)');
        $this->addSql('CREATE INDEX IDX_6EA62BC0F92F3E70 ON app_sampling_documentation (country_id)');
        $this->addSql('ALTER TABLE app_sampling_documentation_audit ADD country_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_sampling_documentation DROP FOREIGN KEY FK_6EA62BC0F92F3E70');
        $this->addSql('DROP INDEX IDX_6EA62BC0F92F3E70 ON app_sampling_documentation');
        $this->addSql('ALTER TABLE app_sampling_documentation DROP country_id');
        $this->addSql('ALTER TABLE app_sampling_documentation_audit DROP country_id');
    }
}
