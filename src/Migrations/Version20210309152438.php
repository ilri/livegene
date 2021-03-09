<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210309152438 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE app_staff_role (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, staff_member_id INT NOT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, percent NUMERIC(5, 4) NOT NULL, INDEX IDX_E3445799166D1F9C (project_id), INDEX IDX_E344579944DB03B1 (staff_member_id), UNIQUE INDEX project_staff_member (project_id, staff_member_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_staff_role_audit (id INT NOT NULL, rev INT NOT NULL, project_id INT DEFAULT NULL, staff_member_id INT DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, percent NUMERIC(5, 4) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_5edef807a077700aeb82dac6400952df_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_partnership (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, partner_id INT NOT NULL, partnership_type_id INT NOT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, INDEX IDX_DFFCF012166D1F9C (project_id), INDEX IDX_DFFCF0129393F8FE (partner_id), INDEX IDX_DFFCF012DCAFB84E (partnership_type_id), UNIQUE INDEX project_partner (project_id, partner_id, partnership_type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_partnership_contact (partnership_id INT NOT NULL, contact_id INT NOT NULL, INDEX IDX_B3F3A206AE7F85 (partnership_id), INDEX IDX_B3F3A20E7A1254A (contact_id), PRIMARY KEY(partnership_id, contact_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_partnership_audit (id INT NOT NULL, rev INT NOT NULL, project_id INT DEFAULT NULL, partner_id INT DEFAULT NULL, partnership_type_id INT DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_9f48c701e93c05b3a04cd06da9e0f2e4_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_country (id INT AUTO_INCREMENT NOT NULL, country VARCHAR(2) NOT NULL, UNIQUE INDEX UNIQ_BE2E492B5373C966 (country), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_country_audit (id INT NOT NULL, rev INT NOT NULL, country VARCHAR(2) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_5b3cdfe055186ee8d75794f5842243d5_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_partnership_type (id INT AUTO_INCREMENT NOT NULL, description VARCHAR(30) NOT NULL, UNIQUE INDEX UNIQ_F7C3A6136DE44026 (description), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_partnership_type_audit (id INT NOT NULL, rev INT NOT NULL, description VARCHAR(30) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_0cc9eb1b7128f1cc507d17ec495f2756_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_animal_species (id INT AUTO_INCREMENT NOT NULL, common_name VARCHAR(30) NOT NULL, scientific_name VARCHAR(50) NOT NULL, UNIQUE INDEX UNIQ_F52A0AD6EEBB6697 (common_name), UNIQUE INDEX UNIQ_F52A0AD647F759B3 (scientific_name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_animal_species_audit (id INT NOT NULL, rev INT NOT NULL, common_name VARCHAR(30) DEFAULT NULL, scientific_name VARCHAR(50) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_967d68abaaf03f3a3e190720725bcf6b_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_country_role (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, country_id INT NOT NULL, percent NUMERIC(5, 4) NOT NULL, INDEX IDX_12D41B0F166D1F9C (project_id), INDEX IDX_12D41B0FF92F3E70 (country_id), UNIQUE INDEX project_country (project_id, country_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_country_role_audit (id INT NOT NULL, rev INT NOT NULL, project_id INT DEFAULT NULL, country_id INT DEFAULT NULL, percent NUMERIC(5, 4) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_2d1725f559d4896c8f2bed18cdfc45b6_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_project (id INT AUTO_INCREMENT NOT NULL, principal_investigator_id INT NOT NULL, donor_id INT NOT NULL, ilri_code VARCHAR(20) NOT NULL, full_name VARCHAR(200) NOT NULL, short_name VARCHAR(50) NOT NULL, team VARCHAR(20) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, donor_reference VARCHAR(50) NOT NULL, donor_project_name VARCHAR(255) NOT NULL, total_project_value INT UNSIGNED NOT NULL, total_ilri_value INT UNSIGNED NOT NULL, total_livegene_value INT UNSIGNED NOT NULL, status SMALLINT UNSIGNED DEFAULT 0 NOT NULL, capacity_development INT UNSIGNED DEFAULT 0 NOT NULL, abstract LONGTEXT NOT NULL, proposal_link VARCHAR(255) NOT NULL, donor_reports LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:simple_array)\', UNIQUE INDEX UNIQ_C2EE50A32993BEAB (ilri_code), INDEX IDX_C2EE50A35BD1A144 (principal_investigator_id), INDEX IDX_C2EE50A33DD7B7A7 (donor_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_project_audit (id INT NOT NULL, rev INT NOT NULL, principal_investigator_id INT DEFAULT NULL, donor_id INT DEFAULT NULL, ilri_code VARCHAR(20) DEFAULT NULL, full_name VARCHAR(200) DEFAULT NULL, short_name VARCHAR(50) DEFAULT NULL, team VARCHAR(20) DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, donor_reference VARCHAR(50) DEFAULT NULL, donor_project_name VARCHAR(255) DEFAULT NULL, total_project_value INT UNSIGNED DEFAULT NULL, total_ilri_value INT UNSIGNED DEFAULT NULL, total_livegene_value INT UNSIGNED DEFAULT NULL, status SMALLINT UNSIGNED DEFAULT 0, capacity_development INT UNSIGNED DEFAULT 0, abstract LONGTEXT DEFAULT NULL, proposal_link VARCHAR(255) DEFAULT NULL, donor_reports LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:simple_array)\', revtype VARCHAR(4) NOT NULL, INDEX rev_b10d27ec73cb0bc0d5c70f46230118cf_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_animal_species_role (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, animal_species_id INT NOT NULL, percent NUMERIC(5, 4) NOT NULL, INDEX IDX_3F554622166D1F9C (project_id), INDEX IDX_3F5546226F540084 (animal_species_id), UNIQUE INDEX project_animalspecies (project_id, animal_species_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_animal_species_role_audit (id INT NOT NULL, rev INT NOT NULL, project_id INT DEFAULT NULL, animal_species_id INT DEFAULT NULL, percent NUMERIC(5, 4) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_06b0f01cf40272c826b21841ad64656e_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_staff_member (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(15) NOT NULL, email VARCHAR(100) NOT NULL, home_program VARCHAR(30) NOT NULL, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(50) NOT NULL, UNIQUE INDEX UNIQ_B7175242F85E0677 (username), UNIQUE INDEX UNIQ_B7175242E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_staff_member_audit (id INT NOT NULL, rev INT NOT NULL, username VARCHAR(15) DEFAULT NULL, email VARCHAR(100) DEFAULT NULL, home_program VARCHAR(30) DEFAULT NULL, first_name VARCHAR(30) DEFAULT NULL, last_name VARCHAR(50) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_41f1b77ab9d902e1e0abc48bb732257e_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sdg_role (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, sdg_id INT NOT NULL, percent NUMERIC(5, 4) NOT NULL, INDEX IDX_E91B73CF166D1F9C (project_id), INDEX IDX_E91B73CF6F37DCD9 (sdg_id), UNIQUE INDEX project_sdg (project_id, sdg_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sdg_role_audit (id INT NOT NULL, rev INT NOT NULL, project_id INT DEFAULT NULL, sdg_id INT DEFAULT NULL, percent NUMERIC(5, 4) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_c9d4cf80581a96761900050b63d2f485_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_activity (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, description VARCHAR(100) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, INDEX IDX_E8649EF6166D1F9C (project_id), UNIQUE INDEX project_description (project_id, description), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_activity_organisation (sampling_activity_id INT NOT NULL, organisation_id INT NOT NULL, INDEX IDX_47172F6E994540B8 (sampling_activity_id), INDEX IDX_47172F6E9E6B1585 (organisation_id), PRIMARY KEY(sampling_activity_id, organisation_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_activity_animal_species (sampling_activity_id INT NOT NULL, animal_species_id INT NOT NULL, INDEX IDX_32017892994540B8 (sampling_activity_id), INDEX IDX_320178926F540084 (animal_species_id), PRIMARY KEY(sampling_activity_id, animal_species_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_activity_country (sampling_activity_id INT NOT NULL, country_id INT NOT NULL, INDEX IDX_2A09F9E5994540B8 (sampling_activity_id), INDEX IDX_2A09F9E5F92F3E70 (country_id), PRIMARY KEY(sampling_activity_id, country_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_activity_audit (id INT NOT NULL, rev INT NOT NULL, project_id INT DEFAULT NULL, description VARCHAR(100) DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_6fb6b85cd06c77978d59fc1bcf67cbbf_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_expenditure (id INT AUTO_INCREMENT NOT NULL, ilri_code VARCHAR(20) NOT NULL, name VARCHAR(255) NOT NULL, home_program VARCHAR(20) NOT NULL, start_date DATE NOT NULL, end_date DATE DEFAULT NULL, report_date DATETIME NOT NULL, total_budget INT UNSIGNED DEFAULT NULL, amount INT UNSIGNED DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_expenditure_audit (id INT NOT NULL, rev INT NOT NULL, ilri_code VARCHAR(20) DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, home_program VARCHAR(20) DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, report_date DATETIME DEFAULT NULL, total_budget INT UNSIGNED DEFAULT NULL, amount INT UNSIGNED DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_f2adb445373b9c5430a52c8f977b3892_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_documentation (id INT AUTO_INCREMENT NOT NULL, sampling_activity_id INT NOT NULL, sampling_document_type_id INT NOT NULL, document_id INT NOT NULL, country_id INT DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, INDEX IDX_6EA62BC0994540B8 (sampling_activity_id), INDEX IDX_6EA62BC0DA055526 (sampling_document_type_id), UNIQUE INDEX UNIQ_6EA62BC0C33F7837 (document_id), INDEX IDX_6EA62BC0F92F3E70 (country_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_documentation_audit (id INT NOT NULL, rev INT NOT NULL, sampling_activity_id INT DEFAULT NULL, sampling_document_type_id INT DEFAULT NULL, document_id INT DEFAULT NULL, country_id INT DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_23d7c0b26bc4c91643f330b85a8ddb2b_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_organisation (id INT AUTO_INCREMENT NOT NULL, country_id INT NOT NULL, short_name VARCHAR(20) NOT NULL, full_name VARCHAR(200) NOT NULL, local_name VARCHAR(200) NOT NULL, link VARCHAR(255) NOT NULL, logo_url VARCHAR(255) NOT NULL, INDEX IDX_246F2835F92F3E70 (country_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_organisation_audit (id INT NOT NULL, rev INT NOT NULL, country_id INT DEFAULT NULL, short_name VARCHAR(20) DEFAULT NULL, full_name VARCHAR(200) DEFAULT NULL, local_name VARCHAR(200) DEFAULT NULL, link VARCHAR(255) DEFAULT NULL, logo_url VARCHAR(255) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_c21c2b7c794e7296b594e0fbb3dc770a_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_document_type (id INT AUTO_INCREMENT NOT NULL, short_name VARCHAR(30) NOT NULL, long_name VARCHAR(100) NOT NULL, UNIQUE INDEX UNIQ_361959413EE4B093 (short_name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sampling_document_type_audit (id INT NOT NULL, rev INT NOT NULL, short_name VARCHAR(30) DEFAULT NULL, long_name VARCHAR(100) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_0613baf7f383e4dab59f54c0c35da6e5_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sdg (id INT AUTO_INCREMENT NOT NULL, headline VARCHAR(50) NOT NULL, full_name VARCHAR(190) NOT NULL, color VARCHAR(7) NOT NULL, link VARCHAR(50) NOT NULL, logo_url VARCHAR(80) NOT NULL, UNIQUE INDEX UNIQ_55C3E684E0E861BD (headline), UNIQUE INDEX UNIQ_55C3E684DBC463C4 (full_name), UNIQUE INDEX UNIQ_55C3E684665648E9 (color), UNIQUE INDEX UNIQ_55C3E68436AC99F1 (link), UNIQUE INDEX UNIQ_55C3E6849520AA7 (logo_url), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_sdg_audit (id INT NOT NULL, rev INT NOT NULL, headline VARCHAR(50) DEFAULT NULL, full_name VARCHAR(190) DEFAULT NULL, color VARCHAR(7) DEFAULT NULL, link VARCHAR(50) DEFAULT NULL, logo_url VARCHAR(80) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_8b656439c25af3f1b06524d0287b16fb_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_contact (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(20) NOT NULL, email VARCHAR(100) NOT NULL, phone VARCHAR(30) NOT NULL, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_contact_audit (id INT NOT NULL, rev INT NOT NULL, title VARCHAR(20) DEFAULT NULL, email VARCHAR(100) DEFAULT NULL, phone VARCHAR(30) DEFAULT NULL, first_name VARCHAR(30) DEFAULT NULL, last_name VARCHAR(50) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_6ee0a3c4d631502cc835ebd3bfc43393_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__gallery (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, context VARCHAR(64) NOT NULL, default_format VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__gallery_audit (id INT NOT NULL, rev INT NOT NULL, name VARCHAR(255) DEFAULT NULL, context VARCHAR(64) DEFAULT NULL, default_format VARCHAR(255) DEFAULT NULL, enabled TINYINT(1) DEFAULT NULL, updated_at DATETIME DEFAULT NULL, created_at DATETIME DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_1ab07bc767a1d240bce23cc5a6c72fe2_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__gallery_media (id INT AUTO_INCREMENT NOT NULL, gallery_id INT DEFAULT NULL, media_id INT DEFAULT NULL, position INT NOT NULL, enabled TINYINT(1) NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_80D4C5414E7AF8F (gallery_id), INDEX IDX_80D4C541EA9FDD75 (media_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__gallery_media_audit (id INT NOT NULL, rev INT NOT NULL, gallery_id INT DEFAULT NULL, media_id INT DEFAULT NULL, position INT DEFAULT NULL, enabled TINYINT(1) DEFAULT NULL, updated_at DATETIME DEFAULT NULL, created_at DATETIME DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_e37fe6790d24ff70dcc7da52631a2b6d_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__media (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, enabled TINYINT(1) NOT NULL, provider_name VARCHAR(255) NOT NULL, provider_status INT NOT NULL, provider_reference VARCHAR(255) NOT NULL, provider_metadata LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', width INT DEFAULT NULL, height INT DEFAULT NULL, length NUMERIC(10, 0) DEFAULT NULL, content_type VARCHAR(255) DEFAULT NULL, content_size INT DEFAULT NULL, copyright VARCHAR(255) DEFAULT NULL, author_name VARCHAR(255) DEFAULT NULL, context VARCHAR(64) DEFAULT NULL, cdn_is_flushable TINYINT(1) DEFAULT NULL, cdn_flush_identifier VARCHAR(64) DEFAULT NULL, cdn_flush_at DATETIME DEFAULT NULL, cdn_status INT DEFAULT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media__media_audit (id INT NOT NULL, rev INT NOT NULL, name VARCHAR(255) DEFAULT NULL, description TEXT DEFAULT NULL, enabled TINYINT(1) DEFAULT NULL, provider_name VARCHAR(255) DEFAULT NULL, provider_status INT DEFAULT NULL, provider_reference VARCHAR(255) DEFAULT NULL, provider_metadata LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', width INT DEFAULT NULL, height INT DEFAULT NULL, length NUMERIC(10, 0) DEFAULT NULL, content_type VARCHAR(255) DEFAULT NULL, content_size INT DEFAULT NULL, copyright VARCHAR(255) DEFAULT NULL, author_name VARCHAR(255) DEFAULT NULL, context VARCHAR(64) DEFAULT NULL, cdn_is_flushable TINYINT(1) DEFAULT NULL, cdn_flush_identifier VARCHAR(64) DEFAULT NULL, cdn_flush_at DATETIME DEFAULT NULL, cdn_status INT DEFAULT NULL, updated_at DATETIME DEFAULT NULL, created_at DATETIME DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_7e85041618e08087eb9a0547f7c4b521_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fos_user_group (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', UNIQUE INDEX UNIQ_583D1F3E5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fos_user_group_audit (id INT NOT NULL, rev INT NOT NULL, name VARCHAR(180) DEFAULT NULL, roles LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', revtype VARCHAR(4) NOT NULL, INDEX rev_791eaf97b684af9208d1f1d958a5729e_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fos_user_user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, username_canonical VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, email_canonical VARCHAR(180) NOT NULL, enabled TINYINT(1) NOT NULL, salt VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, date_of_birth DATETIME DEFAULT NULL, firstname VARCHAR(64) DEFAULT NULL, lastname VARCHAR(64) DEFAULT NULL, website VARCHAR(64) DEFAULT NULL, biography VARCHAR(1000) DEFAULT NULL, gender VARCHAR(1) DEFAULT NULL, locale VARCHAR(8) DEFAULT NULL, timezone VARCHAR(64) DEFAULT NULL, phone VARCHAR(64) DEFAULT NULL, facebook_uid VARCHAR(255) DEFAULT NULL, facebook_name VARCHAR(255) DEFAULT NULL, facebook_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', twitter_uid VARCHAR(255) DEFAULT NULL, twitter_name VARCHAR(255) DEFAULT NULL, twitter_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', gplus_uid VARCHAR(255) DEFAULT NULL, gplus_name VARCHAR(255) DEFAULT NULL, gplus_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', token VARCHAR(255) DEFAULT NULL, two_step_code VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_C560D76192FC23A8 (username_canonical), UNIQUE INDEX UNIQ_C560D761A0D96FBF (email_canonical), UNIQUE INDEX UNIQ_C560D761C05FB297 (confirmation_token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fos_user_user_group (user_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_B3C77447A76ED395 (user_id), INDEX IDX_B3C77447FE54D947 (group_id), PRIMARY KEY(user_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fos_user_user_audit (id INT NOT NULL, rev INT NOT NULL, username VARCHAR(180) DEFAULT NULL, username_canonical VARCHAR(180) DEFAULT NULL, email VARCHAR(180) DEFAULT NULL, email_canonical VARCHAR(180) DEFAULT NULL, enabled TINYINT(1) DEFAULT NULL, salt VARCHAR(255) DEFAULT NULL, password VARCHAR(255) DEFAULT NULL, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, date_of_birth DATETIME DEFAULT NULL, firstname VARCHAR(64) DEFAULT NULL, lastname VARCHAR(64) DEFAULT NULL, website VARCHAR(64) DEFAULT NULL, biography VARCHAR(1000) DEFAULT NULL, gender VARCHAR(1) DEFAULT NULL, locale VARCHAR(8) DEFAULT NULL, timezone VARCHAR(64) DEFAULT NULL, phone VARCHAR(64) DEFAULT NULL, facebook_uid VARCHAR(255) DEFAULT NULL, facebook_name VARCHAR(255) DEFAULT NULL, facebook_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', twitter_uid VARCHAR(255) DEFAULT NULL, twitter_name VARCHAR(255) DEFAULT NULL, twitter_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', gplus_uid VARCHAR(255) DEFAULT NULL, gplus_name VARCHAR(255) DEFAULT NULL, gplus_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', token VARCHAR(255) DEFAULT NULL, two_step_code VARCHAR(255) DEFAULT NULL, revtype VARCHAR(4) NOT NULL, INDEX rev_782dc0f82f289145b1d57ca1c16ae709_idx (rev), PRIMARY KEY(id, rev)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE revisions (id INT AUTO_INCREMENT NOT NULL, timestamp DATETIME NOT NULL, username VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE app_staff_role ADD CONSTRAINT FK_E3445799166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id)');
        $this->addSql('ALTER TABLE app_staff_role ADD CONSTRAINT FK_E344579944DB03B1 FOREIGN KEY (staff_member_id) REFERENCES app_staff_member (id)');
        $this->addSql('ALTER TABLE app_partnership ADD CONSTRAINT FK_DFFCF012166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id)');
        $this->addSql('ALTER TABLE app_partnership ADD CONSTRAINT FK_DFFCF0129393F8FE FOREIGN KEY (partner_id) REFERENCES app_organisation (id)');
        $this->addSql('ALTER TABLE app_partnership ADD CONSTRAINT FK_DFFCF012DCAFB84E FOREIGN KEY (partnership_type_id) REFERENCES app_partnership_type (id)');
        $this->addSql('ALTER TABLE app_partnership_contact ADD CONSTRAINT FK_B3F3A206AE7F85 FOREIGN KEY (partnership_id) REFERENCES app_partnership (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_partnership_contact ADD CONSTRAINT FK_B3F3A20E7A1254A FOREIGN KEY (contact_id) REFERENCES app_contact (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_country_role ADD CONSTRAINT FK_12D41B0F166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id)');
        $this->addSql('ALTER TABLE app_country_role ADD CONSTRAINT FK_12D41B0FF92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id)');
        $this->addSql('ALTER TABLE app_project ADD CONSTRAINT FK_C2EE50A35BD1A144 FOREIGN KEY (principal_investigator_id) REFERENCES app_staff_member (id)');
        $this->addSql('ALTER TABLE app_project ADD CONSTRAINT FK_C2EE50A33DD7B7A7 FOREIGN KEY (donor_id) REFERENCES app_organisation (id)');
        $this->addSql('ALTER TABLE app_animal_species_role ADD CONSTRAINT FK_3F554622166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id)');
        $this->addSql('ALTER TABLE app_animal_species_role ADD CONSTRAINT FK_3F5546226F540084 FOREIGN KEY (animal_species_id) REFERENCES app_animal_species (id)');
        $this->addSql('ALTER TABLE app_sdg_role ADD CONSTRAINT FK_E91B73CF166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id)');
        $this->addSql('ALTER TABLE app_sdg_role ADD CONSTRAINT FK_E91B73CF6F37DCD9 FOREIGN KEY (sdg_id) REFERENCES app_sdg (id)');
        $this->addSql('ALTER TABLE app_sampling_activity ADD CONSTRAINT FK_E8649EF6166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id)');
        $this->addSql('ALTER TABLE app_sampling_activity_organisation ADD CONSTRAINT FK_47172F6E994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_sampling_activity_organisation ADD CONSTRAINT FK_47172F6E9E6B1585 FOREIGN KEY (organisation_id) REFERENCES app_organisation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_sampling_activity_animal_species ADD CONSTRAINT FK_32017892994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_sampling_activity_animal_species ADD CONSTRAINT FK_320178926F540084 FOREIGN KEY (animal_species_id) REFERENCES app_animal_species (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_sampling_activity_country ADD CONSTRAINT FK_2A09F9E5994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_sampling_activity_country ADD CONSTRAINT FK_2A09F9E5F92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_sampling_documentation ADD CONSTRAINT FK_6EA62BC0994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id)');
        $this->addSql('ALTER TABLE app_sampling_documentation ADD CONSTRAINT FK_6EA62BC0DA055526 FOREIGN KEY (sampling_document_type_id) REFERENCES app_sampling_document_type (id)');
        $this->addSql('ALTER TABLE app_sampling_documentation ADD CONSTRAINT FK_6EA62BC0C33F7837 FOREIGN KEY (document_id) REFERENCES media__media (id)');
        $this->addSql('ALTER TABLE app_sampling_documentation ADD CONSTRAINT FK_6EA62BC0F92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id)');
        $this->addSql('ALTER TABLE app_organisation ADD CONSTRAINT FK_246F2835F92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id)');
        $this->addSql('ALTER TABLE media__gallery_media ADD CONSTRAINT FK_80D4C5414E7AF8F FOREIGN KEY (gallery_id) REFERENCES media__gallery (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE media__gallery_media ADD CONSTRAINT FK_80D4C541EA9FDD75 FOREIGN KEY (media_id) REFERENCES media__media (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fos_user_user_group ADD CONSTRAINT FK_B3C77447A76ED395 FOREIGN KEY (user_id) REFERENCES fos_user_user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fos_user_user_group ADD CONSTRAINT FK_B3C77447FE54D947 FOREIGN KEY (group_id) REFERENCES fos_user_group (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_partnership_contact DROP FOREIGN KEY FK_B3F3A206AE7F85');
        $this->addSql('ALTER TABLE app_country_role DROP FOREIGN KEY FK_12D41B0FF92F3E70');
        $this->addSql('ALTER TABLE app_sampling_activity_country DROP FOREIGN KEY FK_2A09F9E5F92F3E70');
        $this->addSql('ALTER TABLE app_sampling_documentation DROP FOREIGN KEY FK_6EA62BC0F92F3E70');
        $this->addSql('ALTER TABLE app_organisation DROP FOREIGN KEY FK_246F2835F92F3E70');
        $this->addSql('ALTER TABLE app_partnership DROP FOREIGN KEY FK_DFFCF012DCAFB84E');
        $this->addSql('ALTER TABLE app_animal_species_role DROP FOREIGN KEY FK_3F5546226F540084');
        $this->addSql('ALTER TABLE app_sampling_activity_animal_species DROP FOREIGN KEY FK_320178926F540084');
        $this->addSql('ALTER TABLE app_staff_role DROP FOREIGN KEY FK_E3445799166D1F9C');
        $this->addSql('ALTER TABLE app_partnership DROP FOREIGN KEY FK_DFFCF012166D1F9C');
        $this->addSql('ALTER TABLE app_country_role DROP FOREIGN KEY FK_12D41B0F166D1F9C');
        $this->addSql('ALTER TABLE app_animal_species_role DROP FOREIGN KEY FK_3F554622166D1F9C');
        $this->addSql('ALTER TABLE app_sdg_role DROP FOREIGN KEY FK_E91B73CF166D1F9C');
        $this->addSql('ALTER TABLE app_sampling_activity DROP FOREIGN KEY FK_E8649EF6166D1F9C');
        $this->addSql('ALTER TABLE app_staff_role DROP FOREIGN KEY FK_E344579944DB03B1');
        $this->addSql('ALTER TABLE app_project DROP FOREIGN KEY FK_C2EE50A35BD1A144');
        $this->addSql('ALTER TABLE app_sampling_activity_organisation DROP FOREIGN KEY FK_47172F6E994540B8');
        $this->addSql('ALTER TABLE app_sampling_activity_animal_species DROP FOREIGN KEY FK_32017892994540B8');
        $this->addSql('ALTER TABLE app_sampling_activity_country DROP FOREIGN KEY FK_2A09F9E5994540B8');
        $this->addSql('ALTER TABLE app_sampling_documentation DROP FOREIGN KEY FK_6EA62BC0994540B8');
        $this->addSql('ALTER TABLE app_partnership DROP FOREIGN KEY FK_DFFCF0129393F8FE');
        $this->addSql('ALTER TABLE app_project DROP FOREIGN KEY FK_C2EE50A33DD7B7A7');
        $this->addSql('ALTER TABLE app_sampling_activity_organisation DROP FOREIGN KEY FK_47172F6E9E6B1585');
        $this->addSql('ALTER TABLE app_sampling_documentation DROP FOREIGN KEY FK_6EA62BC0DA055526');
        $this->addSql('ALTER TABLE app_sdg_role DROP FOREIGN KEY FK_E91B73CF6F37DCD9');
        $this->addSql('ALTER TABLE app_partnership_contact DROP FOREIGN KEY FK_B3F3A20E7A1254A');
        $this->addSql('ALTER TABLE media__gallery_media DROP FOREIGN KEY FK_80D4C5414E7AF8F');
        $this->addSql('ALTER TABLE app_sampling_documentation DROP FOREIGN KEY FK_6EA62BC0C33F7837');
        $this->addSql('ALTER TABLE media__gallery_media DROP FOREIGN KEY FK_80D4C541EA9FDD75');
        $this->addSql('ALTER TABLE fos_user_user_group DROP FOREIGN KEY FK_B3C77447FE54D947');
        $this->addSql('ALTER TABLE fos_user_user_group DROP FOREIGN KEY FK_B3C77447A76ED395');
        $this->addSql('DROP TABLE app_staff_role');
        $this->addSql('DROP TABLE app_staff_role_audit');
        $this->addSql('DROP TABLE app_partnership');
        $this->addSql('DROP TABLE app_partnership_contact');
        $this->addSql('DROP TABLE app_partnership_audit');
        $this->addSql('DROP TABLE app_country');
        $this->addSql('DROP TABLE app_country_audit');
        $this->addSql('DROP TABLE app_partnership_type');
        $this->addSql('DROP TABLE app_partnership_type_audit');
        $this->addSql('DROP TABLE app_animal_species');
        $this->addSql('DROP TABLE app_animal_species_audit');
        $this->addSql('DROP TABLE app_country_role');
        $this->addSql('DROP TABLE app_country_role_audit');
        $this->addSql('DROP TABLE app_project');
        $this->addSql('DROP TABLE app_project_audit');
        $this->addSql('DROP TABLE app_animal_species_role');
        $this->addSql('DROP TABLE app_animal_species_role_audit');
        $this->addSql('DROP TABLE app_staff_member');
        $this->addSql('DROP TABLE app_staff_member_audit');
        $this->addSql('DROP TABLE app_sdg_role');
        $this->addSql('DROP TABLE app_sdg_role_audit');
        $this->addSql('DROP TABLE app_sampling_activity');
        $this->addSql('DROP TABLE app_sampling_activity_organisation');
        $this->addSql('DROP TABLE app_sampling_activity_animal_species');
        $this->addSql('DROP TABLE app_sampling_activity_country');
        $this->addSql('DROP TABLE app_sampling_activity_audit');
        $this->addSql('DROP TABLE app_expenditure');
        $this->addSql('DROP TABLE app_expenditure_audit');
        $this->addSql('DROP TABLE app_sampling_documentation');
        $this->addSql('DROP TABLE app_sampling_documentation_audit');
        $this->addSql('DROP TABLE app_organisation');
        $this->addSql('DROP TABLE app_organisation_audit');
        $this->addSql('DROP TABLE app_sampling_document_type');
        $this->addSql('DROP TABLE app_sampling_document_type_audit');
        $this->addSql('DROP TABLE app_sdg');
        $this->addSql('DROP TABLE app_sdg_audit');
        $this->addSql('DROP TABLE app_contact');
        $this->addSql('DROP TABLE app_contact_audit');
        $this->addSql('DROP TABLE media__gallery');
        $this->addSql('DROP TABLE media__gallery_audit');
        $this->addSql('DROP TABLE media__gallery_media');
        $this->addSql('DROP TABLE media__gallery_media_audit');
        $this->addSql('DROP TABLE media__media');
        $this->addSql('DROP TABLE media__media_audit');
        $this->addSql('DROP TABLE fos_user_group');
        $this->addSql('DROP TABLE fos_user_group_audit');
        $this->addSql('DROP TABLE fos_user_user');
        $this->addSql('DROP TABLE fos_user_user_group');
        $this->addSql('DROP TABLE fos_user_user_audit');
        $this->addSql('DROP TABLE revisions');
    }
}
