<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190226095938 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TABLE app_staff_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, staff_member_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL)');
        $this->addSql('CREATE INDEX IDX_E3445799166D1F9C ON app_staff_role (project_id)');
        $this->addSql('CREATE INDEX IDX_E344579944DB03B1 ON app_staff_role (staff_member_id)');
        $this->addSql('CREATE UNIQUE INDEX project_staff_member ON app_staff_role (project_id, staff_member_id)');
        $this->addSql('CREATE TABLE app_partnership (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, partner_id INTEGER NOT NULL, partnership_type_id INTEGER NOT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL)');
        $this->addSql('CREATE INDEX IDX_DFFCF012166D1F9C ON app_partnership (project_id)');
        $this->addSql('CREATE INDEX IDX_DFFCF0129393F8FE ON app_partnership (partner_id)');
        $this->addSql('CREATE INDEX IDX_DFFCF012DCAFB84E ON app_partnership (partnership_type_id)');
        $this->addSql('CREATE UNIQUE INDEX project_partner ON app_partnership (project_id, partner_id)');
        $this->addSql('CREATE TABLE app_partnership_contact (partnership_id INTEGER NOT NULL, contact_id INTEGER NOT NULL, PRIMARY KEY(partnership_id, contact_id))');
        $this->addSql('CREATE INDEX IDX_B3F3A206AE7F85 ON app_partnership_contact (partnership_id)');
        $this->addSql('CREATE INDEX IDX_B3F3A20E7A1254A ON app_partnership_contact (contact_id)');
        $this->addSql('CREATE TABLE app_country (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, country VARCHAR(2) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_BE2E492B5373C966 ON app_country (country)');
        $this->addSql('CREATE TABLE app_partnership_type (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, description VARCHAR(30) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F7C3A6136DE44026 ON app_partnership_type (description)');
        $this->addSql('CREATE TABLE app_animal_species (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, common_name VARCHAR(30) NOT NULL, scientific_name VARCHAR(50) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F52A0AD6EEBB6697 ON app_animal_species (common_name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F52A0AD647F759B3 ON app_animal_species (scientific_name)');
        $this->addSql('CREATE TABLE app_country_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, country_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL)');
        $this->addSql('CREATE INDEX IDX_12D41B0F166D1F9C ON app_country_role (project_id)');
        $this->addSql('CREATE INDEX IDX_12D41B0FF92F3E70 ON app_country_role (country_id)');
        $this->addSql('CREATE UNIQUE INDEX project_country ON app_country_role (project_id, country_id)');
        $this->addSql('CREATE TABLE app_project (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, principal_investigator_id INTEGER NOT NULL, donor_id INTEGER NOT NULL, ilri_code VARCHAR(20) NOT NULL, full_name VARCHAR(200) NOT NULL, short_name VARCHAR(50) NOT NULL, team VARCHAR(20) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, donor_reference VARCHAR(50) NOT NULL, donor_project_name VARCHAR(255) NOT NULL, total_project_value INTEGER UNSIGNED NOT NULL, total_ilri_value INTEGER UNSIGNED NOT NULL, total_livegene_value INTEGER UNSIGNED NOT NULL, status SMALLINT UNSIGNED DEFAULT 0 NOT NULL, capacity_development INTEGER UNSIGNED DEFAULT 0 NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C2EE50A32993BEAB ON app_project (ilri_code)');
        $this->addSql('CREATE INDEX IDX_C2EE50A35BD1A144 ON app_project (principal_investigator_id)');
        $this->addSql('CREATE INDEX IDX_C2EE50A33DD7B7A7 ON app_project (donor_id)');
        $this->addSql('CREATE TABLE app_staff_member (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(15) NOT NULL, email VARCHAR(100) NOT NULL, home_program VARCHAR(30) NOT NULL, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(50) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B7175242F85E0677 ON app_staff_member (username)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B7175242E7927C74 ON app_staff_member (email)');
        $this->addSql('CREATE TABLE app_sdg_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, sdg_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL)');
        $this->addSql('CREATE INDEX IDX_E91B73CF166D1F9C ON app_sdg_role (project_id)');
        $this->addSql('CREATE INDEX IDX_E91B73CF6F37DCD9 ON app_sdg_role (sdg_id)');
        $this->addSql('CREATE UNIQUE INDEX project_sdg ON app_sdg_role (project_id, sdg_id)');
        $this->addSql('CREATE TABLE app_sampling_activity (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, description VARCHAR(200) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL)');
        $this->addSql('CREATE INDEX IDX_E8649EF6166D1F9C ON app_sampling_activity (project_id)');
        $this->addSql('CREATE UNIQUE INDEX project_description ON app_sampling_activity (project_id, description)');
        $this->addSql('CREATE TABLE app_sampling_activity_organisation (sampling_activity_id INTEGER NOT NULL, organisation_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, organisation_id))');
        $this->addSql('CREATE INDEX IDX_47172F6E994540B8 ON app_sampling_activity_organisation (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_47172F6E9E6B1585 ON app_sampling_activity_organisation (organisation_id)');
        $this->addSql('CREATE TABLE app_sampling_activity_animal_species (sampling_activity_id INTEGER NOT NULL, animal_species_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, animal_species_id))');
        $this->addSql('CREATE INDEX IDX_32017892994540B8 ON app_sampling_activity_animal_species (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_320178926F540084 ON app_sampling_activity_animal_species (animal_species_id)');
        $this->addSql('CREATE TABLE app_sampling_activity_country (sampling_activity_id INTEGER NOT NULL, country_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, country_id))');
        $this->addSql('CREATE INDEX IDX_2A09F9E5994540B8 ON app_sampling_activity_country (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_2A09F9E5F92F3E70 ON app_sampling_activity_country (country_id)');
        $this->addSql('CREATE TABLE app_expenditure (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ilri_code VARCHAR(20) NOT NULL, name VARCHAR(255) NOT NULL, home_program VARCHAR(20) NOT NULL, start_date DATE NOT NULL, end_date DATE DEFAULT NULL, report_date DATETIME NOT NULL, total_budget INTEGER UNSIGNED DEFAULT NULL, amount INTEGER UNSIGNED DEFAULT NULL)');
        $this->addSql('CREATE TABLE app_sampling_documentation (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sampling_activity_id INTEGER NOT NULL, sampling_document_type_id INTEGER NOT NULL, document_id INTEGER NOT NULL)');
        $this->addSql('CREATE INDEX IDX_6EA62BC0994540B8 ON app_sampling_documentation (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_6EA62BC0DA055526 ON app_sampling_documentation (sampling_document_type_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6EA62BC0C33F7837 ON app_sampling_documentation (document_id)');
        $this->addSql('CREATE TABLE app_organisation (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, country_id INTEGER NOT NULL, short_name VARCHAR(20) NOT NULL, full_name VARCHAR(200) NOT NULL, local_name VARCHAR(200) NOT NULL, link VARCHAR(255) NOT NULL, logo_url VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_246F2835DBC463C4 ON app_organisation (full_name)');
        $this->addSql('CREATE INDEX IDX_246F2835F92F3E70 ON app_organisation (country_id)');
        $this->addSql('CREATE TABLE app_sampling_document_type (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, short_name VARCHAR(30) NOT NULL, long_name VARCHAR(100) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_361959413EE4B093 ON app_sampling_document_type (short_name)');
        $this->addSql('CREATE TABLE app_sdg (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, headline VARCHAR(50) NOT NULL, full_name VARCHAR(200) NOT NULL, color VARCHAR(7) NOT NULL, link VARCHAR(255) NOT NULL, logo_url VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_55C3E684E0E861BD ON app_sdg (headline)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_55C3E684DBC463C4 ON app_sdg (full_name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_55C3E684665648E9 ON app_sdg (color)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_55C3E68436AC99F1 ON app_sdg (link)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_55C3E6849520AA7 ON app_sdg (logo_url)');
        $this->addSql('CREATE TABLE app_contact (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(20) NOT NULL, email VARCHAR(100) NOT NULL, phone VARCHAR(30) NOT NULL, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(50) NOT NULL)');
        $this->addSql('CREATE TABLE media__gallery (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, context VARCHAR(64) NOT NULL, default_format VARCHAR(255) NOT NULL, enabled BOOLEAN NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE media__gallery_media (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, gallery_id INTEGER DEFAULT NULL, media_id INTEGER DEFAULT NULL, position INTEGER NOT NULL, enabled BOOLEAN NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('CREATE INDEX IDX_80D4C5414E7AF8F ON media__gallery_media (gallery_id)');
        $this->addSql('CREATE INDEX IDX_80D4C541EA9FDD75 ON media__gallery_media (media_id)');
        $this->addSql('CREATE TABLE media__media (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, enabled BOOLEAN NOT NULL, provider_name VARCHAR(255) NOT NULL, provider_status INTEGER NOT NULL, provider_reference VARCHAR(255) NOT NULL, provider_metadata CLOB DEFAULT NULL --(DC2Type:json)
        , width INTEGER DEFAULT NULL, height INTEGER DEFAULT NULL, length NUMERIC(10, 0) DEFAULT NULL, content_type VARCHAR(255) DEFAULT NULL, content_size INTEGER DEFAULT NULL, copyright VARCHAR(255) DEFAULT NULL, author_name VARCHAR(255) DEFAULT NULL, context VARCHAR(64) DEFAULT NULL, cdn_is_flushable BOOLEAN DEFAULT NULL, cdn_flush_identifier VARCHAR(64) DEFAULT NULL, cdn_flush_at DATETIME DEFAULT NULL, cdn_status INTEGER DEFAULT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE fos_user_group (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(180) NOT NULL, roles CLOB NOT NULL --(DC2Type:array)
        )');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_583D1F3E5E237E06 ON fos_user_group (name)');
        $this->addSql('CREATE TABLE fos_user_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL, username_canonical VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, email_canonical VARCHAR(180) NOT NULL, enabled BOOLEAN NOT NULL, salt VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles CLOB NOT NULL --(DC2Type:array)
        , created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, date_of_birth DATETIME DEFAULT NULL, firstname VARCHAR(64) DEFAULT NULL, lastname VARCHAR(64) DEFAULT NULL, website VARCHAR(64) DEFAULT NULL, biography VARCHAR(1000) DEFAULT NULL, gender VARCHAR(1) DEFAULT NULL, locale VARCHAR(8) DEFAULT NULL, timezone VARCHAR(64) DEFAULT NULL, phone VARCHAR(64) DEFAULT NULL, facebook_uid VARCHAR(255) DEFAULT NULL, facebook_name VARCHAR(255) DEFAULT NULL, facebook_data CLOB DEFAULT NULL --(DC2Type:json)
        , twitter_uid VARCHAR(255) DEFAULT NULL, twitter_name VARCHAR(255) DEFAULT NULL, twitter_data CLOB DEFAULT NULL --(DC2Type:json)
        , gplus_uid VARCHAR(255) DEFAULT NULL, gplus_name VARCHAR(255) DEFAULT NULL, gplus_data CLOB DEFAULT NULL --(DC2Type:json)
        , token VARCHAR(255) DEFAULT NULL, two_step_code VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D76192FC23A8 ON fos_user_user (username_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D761A0D96FBF ON fos_user_user (email_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D761C05FB297 ON fos_user_user (confirmation_token)');
        $this->addSql('CREATE TABLE fos_user_user_group (user_id INTEGER NOT NULL, group_id INTEGER NOT NULL, PRIMARY KEY(user_id, group_id))');
        $this->addSql('CREATE INDEX IDX_B3C77447A76ED395 ON fos_user_user_group (user_id)');
        $this->addSql('CREATE INDEX IDX_B3C77447FE54D947 ON fos_user_user_group (group_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP TABLE app_staff_role');
        $this->addSql('DROP TABLE app_partnership');
        $this->addSql('DROP TABLE app_partnership_contact');
        $this->addSql('DROP TABLE app_country');
        $this->addSql('DROP TABLE app_partnership_type');
        $this->addSql('DROP TABLE app_animal_species');
        $this->addSql('DROP TABLE app_country_role');
        $this->addSql('DROP TABLE app_project');
        $this->addSql('DROP TABLE app_staff_member');
        $this->addSql('DROP TABLE app_sdg_role');
        $this->addSql('DROP TABLE app_sampling_activity');
        $this->addSql('DROP TABLE app_sampling_activity_organisation');
        $this->addSql('DROP TABLE app_sampling_activity_animal_species');
        $this->addSql('DROP TABLE app_sampling_activity_country');
        $this->addSql('DROP TABLE app_expenditure');
        $this->addSql('DROP TABLE app_sampling_documentation');
        $this->addSql('DROP TABLE app_organisation');
        $this->addSql('DROP TABLE app_sampling_document_type');
        $this->addSql('DROP TABLE app_sdg');
        $this->addSql('DROP TABLE app_contact');
        $this->addSql('DROP TABLE media__gallery');
        $this->addSql('DROP TABLE media__gallery_media');
        $this->addSql('DROP TABLE media__media');
        $this->addSql('DROP TABLE fos_user_group');
        $this->addSql('DROP TABLE fos_user_user');
        $this->addSql('DROP TABLE fos_user_user_group');
    }
}
