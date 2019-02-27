<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190227094548 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX project_staff_member');
        $this->addSql('DROP INDEX IDX_E344579944DB03B1');
        $this->addSql('DROP INDEX IDX_E3445799166D1F9C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_staff_role AS SELECT id, project_id, staff_member_id, percent FROM app_staff_role');
        $this->addSql('DROP TABLE app_staff_role');
        $this->addSql('CREATE TABLE app_staff_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, staff_member_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL, CONSTRAINT FK_E3445799166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_E344579944DB03B1 FOREIGN KEY (staff_member_id) REFERENCES app_staff_member (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_staff_role (id, project_id, staff_member_id, percent) SELECT id, project_id, staff_member_id, percent FROM __temp__app_staff_role');
        $this->addSql('DROP TABLE __temp__app_staff_role');
        $this->addSql('CREATE UNIQUE INDEX project_staff_member ON app_staff_role (project_id, staff_member_id)');
        $this->addSql('CREATE INDEX IDX_E344579944DB03B1 ON app_staff_role (staff_member_id)');
        $this->addSql('CREATE INDEX IDX_E3445799166D1F9C ON app_staff_role (project_id)');
        $this->addSql('DROP INDEX project_partner');
        $this->addSql('DROP INDEX IDX_DFFCF012DCAFB84E');
        $this->addSql('DROP INDEX IDX_DFFCF0129393F8FE');
        $this->addSql('DROP INDEX IDX_DFFCF012166D1F9C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_partnership AS SELECT id, project_id, partner_id, partnership_type_id, start_date, end_date FROM app_partnership');
        $this->addSql('DROP TABLE app_partnership');
        $this->addSql('CREATE TABLE app_partnership (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, partner_id INTEGER NOT NULL, partnership_type_id INTEGER NOT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, CONSTRAINT FK_DFFCF012166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_DFFCF0129393F8FE FOREIGN KEY (partner_id) REFERENCES app_organisation (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_DFFCF012DCAFB84E FOREIGN KEY (partnership_type_id) REFERENCES app_partnership_type (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_partnership (id, project_id, partner_id, partnership_type_id, start_date, end_date) SELECT id, project_id, partner_id, partnership_type_id, start_date, end_date FROM __temp__app_partnership');
        $this->addSql('DROP TABLE __temp__app_partnership');
        $this->addSql('CREATE UNIQUE INDEX project_partner ON app_partnership (project_id, partner_id, partnership_type_id)');
        $this->addSql('CREATE INDEX IDX_DFFCF012DCAFB84E ON app_partnership (partnership_type_id)');
        $this->addSql('CREATE INDEX IDX_DFFCF0129393F8FE ON app_partnership (partner_id)');
        $this->addSql('CREATE INDEX IDX_DFFCF012166D1F9C ON app_partnership (project_id)');
        $this->addSql('DROP INDEX IDX_B3F3A20E7A1254A');
        $this->addSql('DROP INDEX IDX_B3F3A206AE7F85');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_partnership_contact AS SELECT partnership_id, contact_id FROM app_partnership_contact');
        $this->addSql('DROP TABLE app_partnership_contact');
        $this->addSql('CREATE TABLE app_partnership_contact (partnership_id INTEGER NOT NULL, contact_id INTEGER NOT NULL, PRIMARY KEY(partnership_id, contact_id), CONSTRAINT FK_B3F3A206AE7F85 FOREIGN KEY (partnership_id) REFERENCES app_partnership (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_B3F3A20E7A1254A FOREIGN KEY (contact_id) REFERENCES app_contact (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_partnership_contact (partnership_id, contact_id) SELECT partnership_id, contact_id FROM __temp__app_partnership_contact');
        $this->addSql('DROP TABLE __temp__app_partnership_contact');
        $this->addSql('CREATE INDEX IDX_B3F3A20E7A1254A ON app_partnership_contact (contact_id)');
        $this->addSql('CREATE INDEX IDX_B3F3A206AE7F85 ON app_partnership_contact (partnership_id)');
        $this->addSql('DROP INDEX project_country');
        $this->addSql('DROP INDEX IDX_12D41B0FF92F3E70');
        $this->addSql('DROP INDEX IDX_12D41B0F166D1F9C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_country_role AS SELECT id, project_id, country_id, percent FROM app_country_role');
        $this->addSql('DROP TABLE app_country_role');
        $this->addSql('CREATE TABLE app_country_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, country_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL, CONSTRAINT FK_12D41B0F166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_12D41B0FF92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_country_role (id, project_id, country_id, percent) SELECT id, project_id, country_id, percent FROM __temp__app_country_role');
        $this->addSql('DROP TABLE __temp__app_country_role');
        $this->addSql('CREATE UNIQUE INDEX project_country ON app_country_role (project_id, country_id)');
        $this->addSql('CREATE INDEX IDX_12D41B0FF92F3E70 ON app_country_role (country_id)');
        $this->addSql('CREATE INDEX IDX_12D41B0F166D1F9C ON app_country_role (project_id)');
        $this->addSql('DROP INDEX IDX_C2EE50A33DD7B7A7');
        $this->addSql('DROP INDEX IDX_C2EE50A35BD1A144');
        $this->addSql('DROP INDEX UNIQ_C2EE50A32993BEAB');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_project AS SELECT id, principal_investigator_id, donor_id, ilri_code, full_name, short_name, team, start_date, end_date, donor_reference, donor_project_name, total_project_value, total_ilri_value, total_livegene_value, status, capacity_development FROM app_project');
        $this->addSql('DROP TABLE app_project');
        $this->addSql('CREATE TABLE app_project (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, principal_investigator_id INTEGER NOT NULL, donor_id INTEGER NOT NULL, ilri_code VARCHAR(20) NOT NULL COLLATE BINARY, full_name VARCHAR(200) NOT NULL COLLATE BINARY, short_name VARCHAR(50) NOT NULL COLLATE BINARY, team VARCHAR(20) NOT NULL COLLATE BINARY, start_date DATE NOT NULL, end_date DATE NOT NULL, donor_reference VARCHAR(50) NOT NULL COLLATE BINARY, donor_project_name VARCHAR(255) NOT NULL COLLATE BINARY, total_project_value INTEGER UNSIGNED NOT NULL, total_ilri_value INTEGER UNSIGNED NOT NULL, total_livegene_value INTEGER UNSIGNED NOT NULL, status SMALLINT UNSIGNED DEFAULT 0 NOT NULL, capacity_development INTEGER UNSIGNED DEFAULT 0 NOT NULL, CONSTRAINT FK_C2EE50A35BD1A144 FOREIGN KEY (principal_investigator_id) REFERENCES app_staff_member (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_C2EE50A33DD7B7A7 FOREIGN KEY (donor_id) REFERENCES app_organisation (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_project (id, principal_investigator_id, donor_id, ilri_code, full_name, short_name, team, start_date, end_date, donor_reference, donor_project_name, total_project_value, total_ilri_value, total_livegene_value, status, capacity_development) SELECT id, principal_investigator_id, donor_id, ilri_code, full_name, short_name, team, start_date, end_date, donor_reference, donor_project_name, total_project_value, total_ilri_value, total_livegene_value, status, capacity_development FROM __temp__app_project');
        $this->addSql('DROP TABLE __temp__app_project');
        $this->addSql('CREATE INDEX IDX_C2EE50A33DD7B7A7 ON app_project (donor_id)');
        $this->addSql('CREATE INDEX IDX_C2EE50A35BD1A144 ON app_project (principal_investigator_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C2EE50A32993BEAB ON app_project (ilri_code)');
        $this->addSql('DROP INDEX project_sdg');
        $this->addSql('DROP INDEX IDX_E91B73CF6F37DCD9');
        $this->addSql('DROP INDEX IDX_E91B73CF166D1F9C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sdg_role AS SELECT id, project_id, sdg_id, percent FROM app_sdg_role');
        $this->addSql('DROP TABLE app_sdg_role');
        $this->addSql('CREATE TABLE app_sdg_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, sdg_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL, CONSTRAINT FK_E91B73CF166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_E91B73CF6F37DCD9 FOREIGN KEY (sdg_id) REFERENCES app_sdg (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_sdg_role (id, project_id, sdg_id, percent) SELECT id, project_id, sdg_id, percent FROM __temp__app_sdg_role');
        $this->addSql('DROP TABLE __temp__app_sdg_role');
        $this->addSql('CREATE UNIQUE INDEX project_sdg ON app_sdg_role (project_id, sdg_id)');
        $this->addSql('CREATE INDEX IDX_E91B73CF6F37DCD9 ON app_sdg_role (sdg_id)');
        $this->addSql('CREATE INDEX IDX_E91B73CF166D1F9C ON app_sdg_role (project_id)');
        $this->addSql('DROP INDEX project_description');
        $this->addSql('DROP INDEX IDX_E8649EF6166D1F9C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity AS SELECT id, project_id, description, start_date, end_date FROM app_sampling_activity');
        $this->addSql('DROP TABLE app_sampling_activity');
        $this->addSql('CREATE TABLE app_sampling_activity (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, description VARCHAR(200) NOT NULL COLLATE BINARY, start_date DATE NOT NULL, end_date DATE NOT NULL, CONSTRAINT FK_E8649EF6166D1F9C FOREIGN KEY (project_id) REFERENCES app_project (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_sampling_activity (id, project_id, description, start_date, end_date) SELECT id, project_id, description, start_date, end_date FROM __temp__app_sampling_activity');
        $this->addSql('DROP TABLE __temp__app_sampling_activity');
        $this->addSql('CREATE UNIQUE INDEX project_description ON app_sampling_activity (project_id, description)');
        $this->addSql('CREATE INDEX IDX_E8649EF6166D1F9C ON app_sampling_activity (project_id)');
        $this->addSql('DROP INDEX IDX_47172F6E9E6B1585');
        $this->addSql('DROP INDEX IDX_47172F6E994540B8');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity_organisation AS SELECT sampling_activity_id, organisation_id FROM app_sampling_activity_organisation');
        $this->addSql('DROP TABLE app_sampling_activity_organisation');
        $this->addSql('CREATE TABLE app_sampling_activity_organisation (sampling_activity_id INTEGER NOT NULL, organisation_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, organisation_id), CONSTRAINT FK_47172F6E994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_47172F6E9E6B1585 FOREIGN KEY (organisation_id) REFERENCES app_organisation (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_sampling_activity_organisation (sampling_activity_id, organisation_id) SELECT sampling_activity_id, organisation_id FROM __temp__app_sampling_activity_organisation');
        $this->addSql('DROP TABLE __temp__app_sampling_activity_organisation');
        $this->addSql('CREATE INDEX IDX_47172F6E9E6B1585 ON app_sampling_activity_organisation (organisation_id)');
        $this->addSql('CREATE INDEX IDX_47172F6E994540B8 ON app_sampling_activity_organisation (sampling_activity_id)');
        $this->addSql('DROP INDEX IDX_320178926F540084');
        $this->addSql('DROP INDEX IDX_32017892994540B8');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity_animal_species AS SELECT sampling_activity_id, animal_species_id FROM app_sampling_activity_animal_species');
        $this->addSql('DROP TABLE app_sampling_activity_animal_species');
        $this->addSql('CREATE TABLE app_sampling_activity_animal_species (sampling_activity_id INTEGER NOT NULL, animal_species_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, animal_species_id), CONSTRAINT FK_32017892994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_320178926F540084 FOREIGN KEY (animal_species_id) REFERENCES app_animal_species (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_sampling_activity_animal_species (sampling_activity_id, animal_species_id) SELECT sampling_activity_id, animal_species_id FROM __temp__app_sampling_activity_animal_species');
        $this->addSql('DROP TABLE __temp__app_sampling_activity_animal_species');
        $this->addSql('CREATE INDEX IDX_320178926F540084 ON app_sampling_activity_animal_species (animal_species_id)');
        $this->addSql('CREATE INDEX IDX_32017892994540B8 ON app_sampling_activity_animal_species (sampling_activity_id)');
        $this->addSql('DROP INDEX IDX_2A09F9E5F92F3E70');
        $this->addSql('DROP INDEX IDX_2A09F9E5994540B8');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity_country AS SELECT sampling_activity_id, country_id FROM app_sampling_activity_country');
        $this->addSql('DROP TABLE app_sampling_activity_country');
        $this->addSql('CREATE TABLE app_sampling_activity_country (sampling_activity_id INTEGER NOT NULL, country_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, country_id), CONSTRAINT FK_2A09F9E5994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_2A09F9E5F92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_sampling_activity_country (sampling_activity_id, country_id) SELECT sampling_activity_id, country_id FROM __temp__app_sampling_activity_country');
        $this->addSql('DROP TABLE __temp__app_sampling_activity_country');
        $this->addSql('CREATE INDEX IDX_2A09F9E5F92F3E70 ON app_sampling_activity_country (country_id)');
        $this->addSql('CREATE INDEX IDX_2A09F9E5994540B8 ON app_sampling_activity_country (sampling_activity_id)');
        $this->addSql('DROP INDEX UNIQ_6EA62BC0C33F7837');
        $this->addSql('DROP INDEX IDX_6EA62BC0DA055526');
        $this->addSql('DROP INDEX IDX_6EA62BC0994540B8');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_documentation AS SELECT id, sampling_activity_id, sampling_document_type_id, document_id FROM app_sampling_documentation');
        $this->addSql('DROP TABLE app_sampling_documentation');
        $this->addSql('CREATE TABLE app_sampling_documentation (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sampling_activity_id INTEGER NOT NULL, sampling_document_type_id INTEGER NOT NULL, document_id INTEGER NOT NULL, CONSTRAINT FK_6EA62BC0994540B8 FOREIGN KEY (sampling_activity_id) REFERENCES app_sampling_activity (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_6EA62BC0DA055526 FOREIGN KEY (sampling_document_type_id) REFERENCES app_sampling_document_type (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_6EA62BC0C33F7837 FOREIGN KEY (document_id) REFERENCES media__media (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_sampling_documentation (id, sampling_activity_id, sampling_document_type_id, document_id) SELECT id, sampling_activity_id, sampling_document_type_id, document_id FROM __temp__app_sampling_documentation');
        $this->addSql('DROP TABLE __temp__app_sampling_documentation');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6EA62BC0C33F7837 ON app_sampling_documentation (document_id)');
        $this->addSql('CREATE INDEX IDX_6EA62BC0DA055526 ON app_sampling_documentation (sampling_document_type_id)');
        $this->addSql('CREATE INDEX IDX_6EA62BC0994540B8 ON app_sampling_documentation (sampling_activity_id)');
        $this->addSql('DROP INDEX IDX_246F2835F92F3E70');
        $this->addSql('DROP INDEX UNIQ_246F2835DBC463C4');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_organisation AS SELECT id, country_id, short_name, full_name, local_name, link, logo_url FROM app_organisation');
        $this->addSql('DROP TABLE app_organisation');
        $this->addSql('CREATE TABLE app_organisation (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, country_id INTEGER NOT NULL, short_name VARCHAR(20) NOT NULL COLLATE BINARY, full_name VARCHAR(200) NOT NULL COLLATE BINARY, local_name VARCHAR(200) NOT NULL COLLATE BINARY, link VARCHAR(255) NOT NULL COLLATE BINARY, logo_url VARCHAR(255) NOT NULL COLLATE BINARY, CONSTRAINT FK_246F2835F92F3E70 FOREIGN KEY (country_id) REFERENCES app_country (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO app_organisation (id, country_id, short_name, full_name, local_name, link, logo_url) SELECT id, country_id, short_name, full_name, local_name, link, logo_url FROM __temp__app_organisation');
        $this->addSql('DROP TABLE __temp__app_organisation');
        $this->addSql('CREATE INDEX IDX_246F2835F92F3E70 ON app_organisation (country_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_246F2835DBC463C4 ON app_organisation (full_name)');
        $this->addSql('DROP INDEX IDX_80D4C541EA9FDD75');
        $this->addSql('DROP INDEX IDX_80D4C5414E7AF8F');
        $this->addSql('CREATE TEMPORARY TABLE __temp__media__gallery_media AS SELECT id, gallery_id, media_id, position, enabled, updated_at, created_at FROM media__gallery_media');
        $this->addSql('DROP TABLE media__gallery_media');
        $this->addSql('CREATE TABLE media__gallery_media (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, gallery_id INTEGER DEFAULT NULL, media_id INTEGER DEFAULT NULL, position INTEGER NOT NULL, enabled BOOLEAN NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, CONSTRAINT FK_80D4C5414E7AF8F FOREIGN KEY (gallery_id) REFERENCES media__gallery (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_80D4C541EA9FDD75 FOREIGN KEY (media_id) REFERENCES media__media (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO media__gallery_media (id, gallery_id, media_id, position, enabled, updated_at, created_at) SELECT id, gallery_id, media_id, position, enabled, updated_at, created_at FROM __temp__media__gallery_media');
        $this->addSql('DROP TABLE __temp__media__gallery_media');
        $this->addSql('CREATE INDEX IDX_80D4C541EA9FDD75 ON media__gallery_media (media_id)');
        $this->addSql('CREATE INDEX IDX_80D4C5414E7AF8F ON media__gallery_media (gallery_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__media__media AS SELECT id, name, description, enabled, provider_name, provider_status, provider_reference, provider_metadata, width, height, length, content_type, content_size, copyright, author_name, context, cdn_is_flushable, cdn_flush_identifier, cdn_flush_at, cdn_status, updated_at, created_at FROM media__media');
        $this->addSql('DROP TABLE media__media');
        $this->addSql('CREATE TABLE media__media (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL COLLATE BINARY, description CLOB DEFAULT NULL COLLATE BINARY, enabled BOOLEAN NOT NULL, provider_name VARCHAR(255) NOT NULL COLLATE BINARY, provider_status INTEGER NOT NULL, provider_reference VARCHAR(255) NOT NULL COLLATE BINARY, width INTEGER DEFAULT NULL, height INTEGER DEFAULT NULL, length NUMERIC(10, 0) DEFAULT NULL, content_type VARCHAR(255) DEFAULT NULL COLLATE BINARY, content_size INTEGER DEFAULT NULL, copyright VARCHAR(255) DEFAULT NULL COLLATE BINARY, author_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, context VARCHAR(64) DEFAULT NULL COLLATE BINARY, cdn_is_flushable BOOLEAN DEFAULT NULL, cdn_flush_identifier VARCHAR(64) DEFAULT NULL COLLATE BINARY, cdn_flush_at DATETIME DEFAULT NULL, cdn_status INTEGER DEFAULT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, provider_metadata CLOB DEFAULT NULL --(DC2Type:json)
        )');
        $this->addSql('INSERT INTO media__media (id, name, description, enabled, provider_name, provider_status, provider_reference, provider_metadata, width, height, length, content_type, content_size, copyright, author_name, context, cdn_is_flushable, cdn_flush_identifier, cdn_flush_at, cdn_status, updated_at, created_at) SELECT id, name, description, enabled, provider_name, provider_status, provider_reference, provider_metadata, width, height, length, content_type, content_size, copyright, author_name, context, cdn_is_flushable, cdn_flush_identifier, cdn_flush_at, cdn_status, updated_at, created_at FROM __temp__media__media');
        $this->addSql('DROP TABLE __temp__media__media');
        $this->addSql('DROP INDEX UNIQ_C560D761C05FB297');
        $this->addSql('DROP INDEX UNIQ_C560D761A0D96FBF');
        $this->addSql('DROP INDEX UNIQ_C560D76192FC23A8');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user_user AS SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, created_at, updated_at, date_of_birth, firstname, lastname, website, biography, gender, locale, timezone, phone, facebook_uid, facebook_name, facebook_data, twitter_uid, twitter_name, twitter_data, gplus_uid, gplus_name, gplus_data, token, two_step_code FROM fos_user_user');
        $this->addSql('DROP TABLE fos_user_user');
        $this->addSql('CREATE TABLE fos_user_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL COLLATE BINARY, username_canonical VARCHAR(180) NOT NULL COLLATE BINARY, email VARCHAR(180) NOT NULL COLLATE BINARY, email_canonical VARCHAR(180) NOT NULL COLLATE BINARY, enabled BOOLEAN NOT NULL, salt VARCHAR(255) DEFAULT NULL COLLATE BINARY, password VARCHAR(255) NOT NULL COLLATE BINARY, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL COLLATE BINARY, password_requested_at DATETIME DEFAULT NULL, roles CLOB NOT NULL COLLATE BINARY --(DC2Type:array)
        , created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, date_of_birth DATETIME DEFAULT NULL, firstname VARCHAR(64) DEFAULT NULL COLLATE BINARY, lastname VARCHAR(64) DEFAULT NULL COLLATE BINARY, website VARCHAR(64) DEFAULT NULL COLLATE BINARY, biography VARCHAR(1000) DEFAULT NULL COLLATE BINARY, gender VARCHAR(1) DEFAULT NULL COLLATE BINARY, locale VARCHAR(8) DEFAULT NULL COLLATE BINARY, timezone VARCHAR(64) DEFAULT NULL COLLATE BINARY, phone VARCHAR(64) DEFAULT NULL COLLATE BINARY, facebook_uid VARCHAR(255) DEFAULT NULL COLLATE BINARY, facebook_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, twitter_uid VARCHAR(255) DEFAULT NULL COLLATE BINARY, twitter_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, gplus_uid VARCHAR(255) DEFAULT NULL COLLATE BINARY, gplus_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, token VARCHAR(255) DEFAULT NULL COLLATE BINARY, two_step_code VARCHAR(255) DEFAULT NULL COLLATE BINARY, facebook_data CLOB DEFAULT NULL --(DC2Type:json)
        , twitter_data CLOB DEFAULT NULL --(DC2Type:json)
        , gplus_data CLOB DEFAULT NULL --(DC2Type:json)
        )');
        $this->addSql('INSERT INTO fos_user_user (id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, created_at, updated_at, date_of_birth, firstname, lastname, website, biography, gender, locale, timezone, phone, facebook_uid, facebook_name, facebook_data, twitter_uid, twitter_name, twitter_data, gplus_uid, gplus_name, gplus_data, token, two_step_code) SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, created_at, updated_at, date_of_birth, firstname, lastname, website, biography, gender, locale, timezone, phone, facebook_uid, facebook_name, facebook_data, twitter_uid, twitter_name, twitter_data, gplus_uid, gplus_name, gplus_data, token, two_step_code FROM __temp__fos_user_user');
        $this->addSql('DROP TABLE __temp__fos_user_user');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D761C05FB297 ON fos_user_user (confirmation_token)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D761A0D96FBF ON fos_user_user (email_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D76192FC23A8 ON fos_user_user (username_canonical)');
        $this->addSql('DROP INDEX IDX_B3C77447FE54D947');
        $this->addSql('DROP INDEX IDX_B3C77447A76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user_user_group AS SELECT user_id, group_id FROM fos_user_user_group');
        $this->addSql('DROP TABLE fos_user_user_group');
        $this->addSql('CREATE TABLE fos_user_user_group (user_id INTEGER NOT NULL, group_id INTEGER NOT NULL, PRIMARY KEY(user_id, group_id), CONSTRAINT FK_B3C77447A76ED395 FOREIGN KEY (user_id) REFERENCES fos_user_user (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_B3C77447FE54D947 FOREIGN KEY (group_id) REFERENCES fos_user_group (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO fos_user_user_group (user_id, group_id) SELECT user_id, group_id FROM __temp__fos_user_user_group');
        $this->addSql('DROP TABLE __temp__fos_user_user_group');
        $this->addSql('CREATE INDEX IDX_B3C77447FE54D947 ON fos_user_user_group (group_id)');
        $this->addSql('CREATE INDEX IDX_B3C77447A76ED395 ON fos_user_user_group (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX IDX_12D41B0F166D1F9C');
        $this->addSql('DROP INDEX IDX_12D41B0FF92F3E70');
        $this->addSql('DROP INDEX project_country');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_country_role AS SELECT id, project_id, country_id, percent FROM app_country_role');
        $this->addSql('DROP TABLE app_country_role');
        $this->addSql('CREATE TABLE app_country_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, country_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL)');
        $this->addSql('INSERT INTO app_country_role (id, project_id, country_id, percent) SELECT id, project_id, country_id, percent FROM __temp__app_country_role');
        $this->addSql('DROP TABLE __temp__app_country_role');
        $this->addSql('CREATE INDEX IDX_12D41B0F166D1F9C ON app_country_role (project_id)');
        $this->addSql('CREATE INDEX IDX_12D41B0FF92F3E70 ON app_country_role (country_id)');
        $this->addSql('CREATE UNIQUE INDEX project_country ON app_country_role (project_id, country_id)');
        $this->addSql('DROP INDEX UNIQ_246F2835DBC463C4');
        $this->addSql('DROP INDEX IDX_246F2835F92F3E70');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_organisation AS SELECT id, country_id, short_name, full_name, local_name, link, logo_url FROM app_organisation');
        $this->addSql('DROP TABLE app_organisation');
        $this->addSql('CREATE TABLE app_organisation (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, country_id INTEGER NOT NULL, short_name VARCHAR(20) NOT NULL, full_name VARCHAR(200) NOT NULL, local_name VARCHAR(200) NOT NULL, link VARCHAR(255) NOT NULL, logo_url VARCHAR(255) NOT NULL)');
        $this->addSql('INSERT INTO app_organisation (id, country_id, short_name, full_name, local_name, link, logo_url) SELECT id, country_id, short_name, full_name, local_name, link, logo_url FROM __temp__app_organisation');
        $this->addSql('DROP TABLE __temp__app_organisation');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_246F2835DBC463C4 ON app_organisation (full_name)');
        $this->addSql('CREATE INDEX IDX_246F2835F92F3E70 ON app_organisation (country_id)');
        $this->addSql('DROP INDEX IDX_DFFCF012166D1F9C');
        $this->addSql('DROP INDEX IDX_DFFCF0129393F8FE');
        $this->addSql('DROP INDEX IDX_DFFCF012DCAFB84E');
        $this->addSql('DROP INDEX project_partner');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_partnership AS SELECT id, project_id, partner_id, partnership_type_id, start_date, end_date FROM app_partnership');
        $this->addSql('DROP TABLE app_partnership');
        $this->addSql('CREATE TABLE app_partnership (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, partner_id INTEGER NOT NULL, partnership_type_id INTEGER NOT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL)');
        $this->addSql('INSERT INTO app_partnership (id, project_id, partner_id, partnership_type_id, start_date, end_date) SELECT id, project_id, partner_id, partnership_type_id, start_date, end_date FROM __temp__app_partnership');
        $this->addSql('DROP TABLE __temp__app_partnership');
        $this->addSql('CREATE INDEX IDX_DFFCF012166D1F9C ON app_partnership (project_id)');
        $this->addSql('CREATE INDEX IDX_DFFCF0129393F8FE ON app_partnership (partner_id)');
        $this->addSql('CREATE INDEX IDX_DFFCF012DCAFB84E ON app_partnership (partnership_type_id)');
        $this->addSql('CREATE UNIQUE INDEX project_partner ON app_partnership (project_id, partner_id)');
        $this->addSql('DROP INDEX IDX_B3F3A206AE7F85');
        $this->addSql('DROP INDEX IDX_B3F3A20E7A1254A');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_partnership_contact AS SELECT partnership_id, contact_id FROM app_partnership_contact');
        $this->addSql('DROP TABLE app_partnership_contact');
        $this->addSql('CREATE TABLE app_partnership_contact (partnership_id INTEGER NOT NULL, contact_id INTEGER NOT NULL, PRIMARY KEY(partnership_id, contact_id))');
        $this->addSql('INSERT INTO app_partnership_contact (partnership_id, contact_id) SELECT partnership_id, contact_id FROM __temp__app_partnership_contact');
        $this->addSql('DROP TABLE __temp__app_partnership_contact');
        $this->addSql('CREATE INDEX IDX_B3F3A206AE7F85 ON app_partnership_contact (partnership_id)');
        $this->addSql('CREATE INDEX IDX_B3F3A20E7A1254A ON app_partnership_contact (contact_id)');
        $this->addSql('DROP INDEX UNIQ_C2EE50A32993BEAB');
        $this->addSql('DROP INDEX IDX_C2EE50A35BD1A144');
        $this->addSql('DROP INDEX IDX_C2EE50A33DD7B7A7');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_project AS SELECT id, principal_investigator_id, donor_id, ilri_code, full_name, short_name, team, start_date, end_date, donor_reference, donor_project_name, total_project_value, total_ilri_value, total_livegene_value, status, capacity_development FROM app_project');
        $this->addSql('DROP TABLE app_project');
        $this->addSql('CREATE TABLE app_project (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, principal_investigator_id INTEGER NOT NULL, donor_id INTEGER NOT NULL, ilri_code VARCHAR(20) NOT NULL, full_name VARCHAR(200) NOT NULL, short_name VARCHAR(50) NOT NULL, team VARCHAR(20) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, donor_reference VARCHAR(50) NOT NULL, donor_project_name VARCHAR(255) NOT NULL, total_project_value INTEGER UNSIGNED NOT NULL, total_ilri_value INTEGER UNSIGNED NOT NULL, total_livegene_value INTEGER UNSIGNED NOT NULL, status SMALLINT UNSIGNED DEFAULT 0 NOT NULL, capacity_development INTEGER UNSIGNED DEFAULT 0 NOT NULL)');
        $this->addSql('INSERT INTO app_project (id, principal_investigator_id, donor_id, ilri_code, full_name, short_name, team, start_date, end_date, donor_reference, donor_project_name, total_project_value, total_ilri_value, total_livegene_value, status, capacity_development) SELECT id, principal_investigator_id, donor_id, ilri_code, full_name, short_name, team, start_date, end_date, donor_reference, donor_project_name, total_project_value, total_ilri_value, total_livegene_value, status, capacity_development FROM __temp__app_project');
        $this->addSql('DROP TABLE __temp__app_project');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C2EE50A32993BEAB ON app_project (ilri_code)');
        $this->addSql('CREATE INDEX IDX_C2EE50A35BD1A144 ON app_project (principal_investigator_id)');
        $this->addSql('CREATE INDEX IDX_C2EE50A33DD7B7A7 ON app_project (donor_id)');
        $this->addSql('DROP INDEX IDX_E8649EF6166D1F9C');
        $this->addSql('DROP INDEX project_description');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity AS SELECT id, project_id, description, start_date, end_date FROM app_sampling_activity');
        $this->addSql('DROP TABLE app_sampling_activity');
        $this->addSql('CREATE TABLE app_sampling_activity (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, description VARCHAR(200) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL)');
        $this->addSql('INSERT INTO app_sampling_activity (id, project_id, description, start_date, end_date) SELECT id, project_id, description, start_date, end_date FROM __temp__app_sampling_activity');
        $this->addSql('DROP TABLE __temp__app_sampling_activity');
        $this->addSql('CREATE INDEX IDX_E8649EF6166D1F9C ON app_sampling_activity (project_id)');
        $this->addSql('CREATE UNIQUE INDEX project_description ON app_sampling_activity (project_id, description)');
        $this->addSql('DROP INDEX IDX_32017892994540B8');
        $this->addSql('DROP INDEX IDX_320178926F540084');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity_animal_species AS SELECT sampling_activity_id, animal_species_id FROM app_sampling_activity_animal_species');
        $this->addSql('DROP TABLE app_sampling_activity_animal_species');
        $this->addSql('CREATE TABLE app_sampling_activity_animal_species (sampling_activity_id INTEGER NOT NULL, animal_species_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, animal_species_id))');
        $this->addSql('INSERT INTO app_sampling_activity_animal_species (sampling_activity_id, animal_species_id) SELECT sampling_activity_id, animal_species_id FROM __temp__app_sampling_activity_animal_species');
        $this->addSql('DROP TABLE __temp__app_sampling_activity_animal_species');
        $this->addSql('CREATE INDEX IDX_32017892994540B8 ON app_sampling_activity_animal_species (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_320178926F540084 ON app_sampling_activity_animal_species (animal_species_id)');
        $this->addSql('DROP INDEX IDX_2A09F9E5994540B8');
        $this->addSql('DROP INDEX IDX_2A09F9E5F92F3E70');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity_country AS SELECT sampling_activity_id, country_id FROM app_sampling_activity_country');
        $this->addSql('DROP TABLE app_sampling_activity_country');
        $this->addSql('CREATE TABLE app_sampling_activity_country (sampling_activity_id INTEGER NOT NULL, country_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, country_id))');
        $this->addSql('INSERT INTO app_sampling_activity_country (sampling_activity_id, country_id) SELECT sampling_activity_id, country_id FROM __temp__app_sampling_activity_country');
        $this->addSql('DROP TABLE __temp__app_sampling_activity_country');
        $this->addSql('CREATE INDEX IDX_2A09F9E5994540B8 ON app_sampling_activity_country (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_2A09F9E5F92F3E70 ON app_sampling_activity_country (country_id)');
        $this->addSql('DROP INDEX IDX_47172F6E994540B8');
        $this->addSql('DROP INDEX IDX_47172F6E9E6B1585');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_activity_organisation AS SELECT sampling_activity_id, organisation_id FROM app_sampling_activity_organisation');
        $this->addSql('DROP TABLE app_sampling_activity_organisation');
        $this->addSql('CREATE TABLE app_sampling_activity_organisation (sampling_activity_id INTEGER NOT NULL, organisation_id INTEGER NOT NULL, PRIMARY KEY(sampling_activity_id, organisation_id))');
        $this->addSql('INSERT INTO app_sampling_activity_organisation (sampling_activity_id, organisation_id) SELECT sampling_activity_id, organisation_id FROM __temp__app_sampling_activity_organisation');
        $this->addSql('DROP TABLE __temp__app_sampling_activity_organisation');
        $this->addSql('CREATE INDEX IDX_47172F6E994540B8 ON app_sampling_activity_organisation (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_47172F6E9E6B1585 ON app_sampling_activity_organisation (organisation_id)');
        $this->addSql('DROP INDEX IDX_6EA62BC0994540B8');
        $this->addSql('DROP INDEX IDX_6EA62BC0DA055526');
        $this->addSql('DROP INDEX UNIQ_6EA62BC0C33F7837');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sampling_documentation AS SELECT id, sampling_activity_id, sampling_document_type_id, document_id FROM app_sampling_documentation');
        $this->addSql('DROP TABLE app_sampling_documentation');
        $this->addSql('CREATE TABLE app_sampling_documentation (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sampling_activity_id INTEGER NOT NULL, sampling_document_type_id INTEGER NOT NULL, document_id INTEGER NOT NULL)');
        $this->addSql('INSERT INTO app_sampling_documentation (id, sampling_activity_id, sampling_document_type_id, document_id) SELECT id, sampling_activity_id, sampling_document_type_id, document_id FROM __temp__app_sampling_documentation');
        $this->addSql('DROP TABLE __temp__app_sampling_documentation');
        $this->addSql('CREATE INDEX IDX_6EA62BC0994540B8 ON app_sampling_documentation (sampling_activity_id)');
        $this->addSql('CREATE INDEX IDX_6EA62BC0DA055526 ON app_sampling_documentation (sampling_document_type_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6EA62BC0C33F7837 ON app_sampling_documentation (document_id)');
        $this->addSql('DROP INDEX IDX_E91B73CF166D1F9C');
        $this->addSql('DROP INDEX IDX_E91B73CF6F37DCD9');
        $this->addSql('DROP INDEX project_sdg');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_sdg_role AS SELECT id, project_id, sdg_id, percent FROM app_sdg_role');
        $this->addSql('DROP TABLE app_sdg_role');
        $this->addSql('CREATE TABLE app_sdg_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, sdg_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL)');
        $this->addSql('INSERT INTO app_sdg_role (id, project_id, sdg_id, percent) SELECT id, project_id, sdg_id, percent FROM __temp__app_sdg_role');
        $this->addSql('DROP TABLE __temp__app_sdg_role');
        $this->addSql('CREATE INDEX IDX_E91B73CF166D1F9C ON app_sdg_role (project_id)');
        $this->addSql('CREATE INDEX IDX_E91B73CF6F37DCD9 ON app_sdg_role (sdg_id)');
        $this->addSql('CREATE UNIQUE INDEX project_sdg ON app_sdg_role (project_id, sdg_id)');
        $this->addSql('DROP INDEX IDX_E3445799166D1F9C');
        $this->addSql('DROP INDEX IDX_E344579944DB03B1');
        $this->addSql('DROP INDEX project_staff_member');
        $this->addSql('CREATE TEMPORARY TABLE __temp__app_staff_role AS SELECT id, project_id, staff_member_id, percent FROM app_staff_role');
        $this->addSql('DROP TABLE app_staff_role');
        $this->addSql('CREATE TABLE app_staff_role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, project_id INTEGER NOT NULL, staff_member_id INTEGER NOT NULL, percent SMALLINT UNSIGNED NOT NULL)');
        $this->addSql('INSERT INTO app_staff_role (id, project_id, staff_member_id, percent) SELECT id, project_id, staff_member_id, percent FROM __temp__app_staff_role');
        $this->addSql('DROP TABLE __temp__app_staff_role');
        $this->addSql('CREATE INDEX IDX_E3445799166D1F9C ON app_staff_role (project_id)');
        $this->addSql('CREATE INDEX IDX_E344579944DB03B1 ON app_staff_role (staff_member_id)');
        $this->addSql('CREATE UNIQUE INDEX project_staff_member ON app_staff_role (project_id, staff_member_id)');
        $this->addSql('DROP INDEX UNIQ_C560D76192FC23A8');
        $this->addSql('DROP INDEX UNIQ_C560D761A0D96FBF');
        $this->addSql('DROP INDEX UNIQ_C560D761C05FB297');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user_user AS SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, created_at, updated_at, date_of_birth, firstname, lastname, website, biography, gender, locale, timezone, phone, facebook_uid, facebook_name, facebook_data, twitter_uid, twitter_name, twitter_data, gplus_uid, gplus_name, gplus_data, token, two_step_code FROM fos_user_user');
        $this->addSql('DROP TABLE fos_user_user');
        $this->addSql('CREATE TABLE fos_user_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL, username_canonical VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, email_canonical VARCHAR(180) NOT NULL, enabled BOOLEAN NOT NULL, salt VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles CLOB NOT NULL --(DC2Type:array)
        , created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, date_of_birth DATETIME DEFAULT NULL, firstname VARCHAR(64) DEFAULT NULL, lastname VARCHAR(64) DEFAULT NULL, website VARCHAR(64) DEFAULT NULL, biography VARCHAR(1000) DEFAULT NULL, gender VARCHAR(1) DEFAULT NULL, locale VARCHAR(8) DEFAULT NULL, timezone VARCHAR(64) DEFAULT NULL, phone VARCHAR(64) DEFAULT NULL, facebook_uid VARCHAR(255) DEFAULT NULL, facebook_name VARCHAR(255) DEFAULT NULL, twitter_uid VARCHAR(255) DEFAULT NULL, twitter_name VARCHAR(255) DEFAULT NULL, gplus_uid VARCHAR(255) DEFAULT NULL, gplus_name VARCHAR(255) DEFAULT NULL, token VARCHAR(255) DEFAULT NULL, two_step_code VARCHAR(255) DEFAULT NULL, facebook_data CLOB DEFAULT \'NULL --(DC2Type:json)\' COLLATE BINARY --(DC2Type:json)
        , twitter_data CLOB DEFAULT \'NULL --(DC2Type:json)\' COLLATE BINARY --(DC2Type:json)
        , gplus_data CLOB DEFAULT \'NULL --(DC2Type:json)\' COLLATE BINARY --(DC2Type:json)
        )');
        $this->addSql('INSERT INTO fos_user_user (id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, created_at, updated_at, date_of_birth, firstname, lastname, website, biography, gender, locale, timezone, phone, facebook_uid, facebook_name, facebook_data, twitter_uid, twitter_name, twitter_data, gplus_uid, gplus_name, gplus_data, token, two_step_code) SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, created_at, updated_at, date_of_birth, firstname, lastname, website, biography, gender, locale, timezone, phone, facebook_uid, facebook_name, facebook_data, twitter_uid, twitter_name, twitter_data, gplus_uid, gplus_name, gplus_data, token, two_step_code FROM __temp__fos_user_user');
        $this->addSql('DROP TABLE __temp__fos_user_user');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D76192FC23A8 ON fos_user_user (username_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D761A0D96FBF ON fos_user_user (email_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C560D761C05FB297 ON fos_user_user (confirmation_token)');
        $this->addSql('DROP INDEX IDX_B3C77447A76ED395');
        $this->addSql('DROP INDEX IDX_B3C77447FE54D947');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user_user_group AS SELECT user_id, group_id FROM fos_user_user_group');
        $this->addSql('DROP TABLE fos_user_user_group');
        $this->addSql('CREATE TABLE fos_user_user_group (user_id INTEGER NOT NULL, group_id INTEGER NOT NULL, PRIMARY KEY(user_id, group_id))');
        $this->addSql('INSERT INTO fos_user_user_group (user_id, group_id) SELECT user_id, group_id FROM __temp__fos_user_user_group');
        $this->addSql('DROP TABLE __temp__fos_user_user_group');
        $this->addSql('CREATE INDEX IDX_B3C77447A76ED395 ON fos_user_user_group (user_id)');
        $this->addSql('CREATE INDEX IDX_B3C77447FE54D947 ON fos_user_user_group (group_id)');
        $this->addSql('DROP INDEX IDX_80D4C5414E7AF8F');
        $this->addSql('DROP INDEX IDX_80D4C541EA9FDD75');
        $this->addSql('CREATE TEMPORARY TABLE __temp__media__gallery_media AS SELECT id, gallery_id, media_id, position, enabled, updated_at, created_at FROM media__gallery_media');
        $this->addSql('DROP TABLE media__gallery_media');
        $this->addSql('CREATE TABLE media__gallery_media (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, gallery_id INTEGER DEFAULT NULL, media_id INTEGER DEFAULT NULL, position INTEGER NOT NULL, enabled BOOLEAN NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('INSERT INTO media__gallery_media (id, gallery_id, media_id, position, enabled, updated_at, created_at) SELECT id, gallery_id, media_id, position, enabled, updated_at, created_at FROM __temp__media__gallery_media');
        $this->addSql('DROP TABLE __temp__media__gallery_media');
        $this->addSql('CREATE INDEX IDX_80D4C5414E7AF8F ON media__gallery_media (gallery_id)');
        $this->addSql('CREATE INDEX IDX_80D4C541EA9FDD75 ON media__gallery_media (media_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__media__media AS SELECT id, name, description, enabled, provider_name, provider_status, provider_reference, provider_metadata, width, height, length, content_type, content_size, copyright, author_name, context, cdn_is_flushable, cdn_flush_identifier, cdn_flush_at, cdn_status, updated_at, created_at FROM media__media');
        $this->addSql('DROP TABLE media__media');
        $this->addSql('CREATE TABLE media__media (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, enabled BOOLEAN NOT NULL, provider_name VARCHAR(255) NOT NULL, provider_status INTEGER NOT NULL, provider_reference VARCHAR(255) NOT NULL, width INTEGER DEFAULT NULL, height INTEGER DEFAULT NULL, length NUMERIC(10, 0) DEFAULT NULL, content_type VARCHAR(255) DEFAULT NULL, content_size INTEGER DEFAULT NULL, copyright VARCHAR(255) DEFAULT NULL, author_name VARCHAR(255) DEFAULT NULL, context VARCHAR(64) DEFAULT NULL, cdn_is_flushable BOOLEAN DEFAULT NULL, cdn_flush_identifier VARCHAR(64) DEFAULT NULL, cdn_flush_at DATETIME DEFAULT NULL, cdn_status INTEGER DEFAULT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, provider_metadata CLOB DEFAULT \'NULL --(DC2Type:json)\' COLLATE BINARY --(DC2Type:json)
        )');
        $this->addSql('INSERT INTO media__media (id, name, description, enabled, provider_name, provider_status, provider_reference, provider_metadata, width, height, length, content_type, content_size, copyright, author_name, context, cdn_is_flushable, cdn_flush_identifier, cdn_flush_at, cdn_status, updated_at, created_at) SELECT id, name, description, enabled, provider_name, provider_status, provider_reference, provider_metadata, width, height, length, content_type, content_size, copyright, author_name, context, cdn_is_flushable, cdn_flush_identifier, cdn_flush_at, cdn_status, updated_at, created_at FROM __temp__media__media');
        $this->addSql('DROP TABLE __temp__media__media');
    }
}
