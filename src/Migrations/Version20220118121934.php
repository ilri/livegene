<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220118121934 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE app_animal_species_audit ADD CONSTRAINT rev_967d68abaaf03f3a3e190720725bcf6b_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_animal_species_role_audit ADD CONSTRAINT rev_06b0f01cf40272c826b21841ad64656e_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_contact_audit ADD CONSTRAINT rev_6ee0a3c4d631502cc835ebd3bfc43393_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_country_audit ADD CONSTRAINT rev_5b3cdfe055186ee8d75794f5842243d5_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_country_role_audit ADD CONSTRAINT rev_2d1725f559d4896c8f2bed18cdfc45b6_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_expenditure_audit ADD CONSTRAINT rev_f2adb445373b9c5430a52c8f977b3892_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_organisation ADD encoded_logo LONGTEXT DEFAULT NULL, ADD logo_status TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE app_organisation_audit ADD encoded_logo LONGTEXT DEFAULT NULL, ADD logo_status TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE app_organisation_audit ADD CONSTRAINT rev_c21c2b7c794e7296b594e0fbb3dc770a_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_partnership_audit ADD CONSTRAINT rev_9f48c701e93c05b3a04cd06da9e0f2e4_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_partnership_type_audit ADD CONSTRAINT rev_0cc9eb1b7128f1cc507d17ec495f2756_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_project_audit ADD CONSTRAINT rev_b10d27ec73cb0bc0d5c70f46230118cf_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_sampling_activity_audit ADD CONSTRAINT rev_6fb6b85cd06c77978d59fc1bcf67cbbf_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_sampling_document_type_audit ADD CONSTRAINT rev_0613baf7f383e4dab59f54c0c35da6e5_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_sampling_documentation_audit ADD CONSTRAINT rev_23d7c0b26bc4c91643f330b85a8ddb2b_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_sdg_audit ADD CONSTRAINT rev_8b656439c25af3f1b06524d0287b16fb_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_sdg_role_audit ADD CONSTRAINT rev_c9d4cf80581a96761900050b63d2f485_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_staff_member_audit ADD CONSTRAINT rev_41f1b77ab9d902e1e0abc48bb732257e_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE app_staff_role_audit ADD CONSTRAINT rev_5edef807a077700aeb82dac6400952df_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE fos_user_group_audit ADD CONSTRAINT rev_791eaf97b684af9208d1f1d958a5729e_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE fos_user_user_audit ADD CONSTRAINT rev_782dc0f82f289145b1d57ca1c16ae709_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE media__gallery_audit ADD CONSTRAINT rev_1ab07bc767a1d240bce23cc5a6c72fe2_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE media__gallery_media_audit ADD CONSTRAINT rev_e37fe6790d24ff70dcc7da52631a2b6d_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
        $this->addSql('ALTER TABLE media__media_audit ADD CONSTRAINT rev_7e85041618e08087eb9a0547f7c4b521_fk FOREIGN KEY (rev) REFERENCES revisions (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE app_animal_species_audit DROP FOREIGN KEY rev_967d68abaaf03f3a3e190720725bcf6b_fk');
        $this->addSql('ALTER TABLE app_animal_species_role_audit DROP FOREIGN KEY rev_06b0f01cf40272c826b21841ad64656e_fk');
        $this->addSql('ALTER TABLE app_contact_audit DROP FOREIGN KEY rev_6ee0a3c4d631502cc835ebd3bfc43393_fk');
        $this->addSql('ALTER TABLE app_country_audit DROP FOREIGN KEY rev_5b3cdfe055186ee8d75794f5842243d5_fk');
        $this->addSql('ALTER TABLE app_country_role_audit DROP FOREIGN KEY rev_2d1725f559d4896c8f2bed18cdfc45b6_fk');
        $this->addSql('ALTER TABLE app_expenditure_audit DROP FOREIGN KEY rev_f2adb445373b9c5430a52c8f977b3892_fk');
        $this->addSql('ALTER TABLE app_organisation DROP encoded_logo, DROP logo_status');
        $this->addSql('ALTER TABLE app_organisation_audit DROP FOREIGN KEY rev_c21c2b7c794e7296b594e0fbb3dc770a_fk');
        $this->addSql('ALTER TABLE app_organisation_audit DROP encoded_logo, DROP logo_status');
        $this->addSql('ALTER TABLE app_partnership_audit DROP FOREIGN KEY rev_9f48c701e93c05b3a04cd06da9e0f2e4_fk');
        $this->addSql('ALTER TABLE app_partnership_type_audit DROP FOREIGN KEY rev_0cc9eb1b7128f1cc507d17ec495f2756_fk');
        $this->addSql('ALTER TABLE app_project_audit DROP FOREIGN KEY rev_b10d27ec73cb0bc0d5c70f46230118cf_fk');
        $this->addSql('ALTER TABLE app_sampling_activity_audit DROP FOREIGN KEY rev_6fb6b85cd06c77978d59fc1bcf67cbbf_fk');
        $this->addSql('ALTER TABLE app_sampling_document_type_audit DROP FOREIGN KEY rev_0613baf7f383e4dab59f54c0c35da6e5_fk');
        $this->addSql('ALTER TABLE app_sampling_documentation_audit DROP FOREIGN KEY rev_23d7c0b26bc4c91643f330b85a8ddb2b_fk');
        $this->addSql('ALTER TABLE app_sdg_audit DROP FOREIGN KEY rev_8b656439c25af3f1b06524d0287b16fb_fk');
        $this->addSql('ALTER TABLE app_sdg_role_audit DROP FOREIGN KEY rev_c9d4cf80581a96761900050b63d2f485_fk');
        $this->addSql('ALTER TABLE app_staff_member_audit DROP FOREIGN KEY rev_41f1b77ab9d902e1e0abc48bb732257e_fk');
        $this->addSql('ALTER TABLE app_staff_role_audit DROP FOREIGN KEY rev_5edef807a077700aeb82dac6400952df_fk');
        $this->addSql('ALTER TABLE fos_user_group_audit DROP FOREIGN KEY rev_791eaf97b684af9208d1f1d958a5729e_fk');
        $this->addSql('ALTER TABLE fos_user_user_audit DROP FOREIGN KEY rev_782dc0f82f289145b1d57ca1c16ae709_fk');
        $this->addSql('ALTER TABLE media__gallery_audit DROP FOREIGN KEY rev_1ab07bc767a1d240bce23cc5a6c72fe2_fk');
        $this->addSql('ALTER TABLE media__gallery_media_audit DROP FOREIGN KEY rev_e37fe6790d24ff70dcc7da52631a2b6d_fk');
        $this->addSql('ALTER TABLE media__media_audit DROP FOREIGN KEY rev_7e85041618e08087eb9a0547f7c4b521_fk');
    }
}
