<?php

namespace App\Tests\Admin;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Test\UserFixtures;

class StaffMemberAdminTest extends WebTestCase
{
    private $client;
    private $fixtures = null;

    public function setUp()
    {
        $this->client = $this->createClient();
    }

    /**
     * Helper method.
     * Log in the user through the admin login form.
     */
    private function formLogIn($username)
    {
        $crawler = $this->client->request('GET', '/admin/login');
        $form = $crawler->filter('button.btn-primary')->form();
        $this->client->submit($form, [
            '_username' => $username,
            '_password' => UserFixtures::PASSWORD
        ]);
    }

    /**
     * Test that the form for creating StaffMember can be accessed.
     * It should not display the box for managing staff roles.
     */
    public function testNewStaffMemberFormDoesnotDisplayRoles()
    {
        $fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
        ])->getReferenceRepository();
        $username = $fixtures->getReference('super_admin')->getUsername();
        $this->formLogin($username);

        $crawler = $this->client->request('GET', '/admin/app/staffmember/create');
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
        $this->assertSame(
            1,
            $crawler->filter('div.box')->count()
        );
    }

    /**
     * Test that the form for editing StaffMember can be accessed.
     * It should display the box for managing staff roles.
     * There are no staff roles yet, so no table is displayed.
     */
    public function testExistingStaffMemberWithoutRolesDisplaysEmptyBox()
    {
        $fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\CountryFixtures',
            'App\DataFixtures\Test\OrganisationFixtures',
            'App\DataFixtures\Test\StaffMemberFixtures',
            'App\DataFixtures\Test\ProjectFixtures',
        ])->getReferenceRepository();

        $crawler = $this->existingStaffMemberCanManageRoles($fixtures);

        $this->assertSame(
            0,
            $crawler->filter('table.table.table-bordered')->count()
        );
    }

    /**
     * Test that the form for editing StaffMember can be accessed.
     * It should display the box for managing staff roles.
     * It should display a table with the existing staff roles.
     */
    public function testExistingStaffMemberWithRolesDisplaysTable()
    {
        $fixtures = $this->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\CountryFixtures',
            'App\DataFixtures\Test\OrganisationFixtures',
            'App\DataFixtures\Test\StaffMemberFixtures',
            'App\DataFixtures\Test\ProjectFixtures',
            'App\DataFixtures\Test\StaffRoleFixtures',
        ])->getReferenceRepository();

        $crawler = $this->existingStaffMemberCanManageRoles($fixtures);

        $this->assertSame(
            1,
            $crawler->filter('table.table.table-bordered')->count()
        );

        // check that the table contains a row with the data for the staff role
        $staffRole = $fixtures->getReference('staff-role');

        // check that the project is displayed in the second column
        $this->assertSame(
            (string)$staffRole->getProject(),
            $crawler->filter('table.table.table-bordered tr td')->eq(1)->filter('a')->text()
        );

        // check that the checkbox in the third column is checked if the project is active
        $checkbox = $crawler->filter('table.table.table-bordered tr td')->eq(2)->filter('input[type="checkbox"]');
        $isActive = $staffRole->getProject()->getIsActive() ? 'checked' : '';
        $this->assertSame(
            $isActive,
            $checkbox->attr('checked')
        );

        // check that the fourth column contains the percent for the staff role
        $percent = $staffRole->getPercent();
        $this->assertSame(
            (string)$percent,
            $crawler->filter('table.table.table-bordered tr td')->eq(3)->filter('input[type="number"]')->attr('value')
        );

        // delete the staff role
        $form = $crawler->selectButton('Update')->form();
        $deleteCheckbox = $crawler->filter('table.table.table-bordered tr td')->eq(0)->filter('input[type="checkbox"]')->attr('name');
        $form[$deleteCheckbox]->tick();
        $this->client->submit($form);
        $this->client->followRedirect();
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    private function existingStaffMemberCanManageRoles($fixtures)
    {
        $username = $fixtures->getReference('super_admin')->getUsername();
        $this->formLogin($username);
        
        $staffMemberId = $fixtures->getReference('coyote')->getId();
        $crawler = $this->client->request('GET', sprintf('/admin/app/staffmember/%s/edit', $staffMemberId));
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
        $this->assertSame(
            2,
            $crawler->filter('div.box')->count()
        );

        return $crawler;
    }
}
