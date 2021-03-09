<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191011085957 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE app_animal_species_role (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, animal_species_id INT NOT NULL, percent NUMERIC(5, 4) NOT NULL, INDEX IDX_3F554622166D1F9C (project_id), INDEX IDX_3F5546226F540084 (animal_species_id), UNIQUE INDEX project_animalspecies (project_id, animal_species_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_animal_species_role_audit (id INT NOT NULL, rev INT NOT NULL, project_id INT DEFAULT NULL, animal_species_id INT DEFAULT NULL, percent NUMERIC(5, 4) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_06b0f01cf40272c826b21841ad64656e_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE app_animal_species_role ADD CONSTRAINT FK_3F554622166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id)');
        $this->addSql('ALTER TABLE app_animal_species_role ADD CONSTRAINT FK_3F5546226F540084 FOREIGN KEY (animal_species_id) REFERENCES app_animal_species (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE app_animal_species_role');
        $this->addSql('DROP TABLE app_animal_species_role_audit');
    }
}
