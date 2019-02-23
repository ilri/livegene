<?php

namespace App\Tests;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\DomCrawler\Crawler;
use App\DataFixtures\UserFixtures;

/**
 * Test that all routes are accessible as anticipated.
 * There should be no access to any route for anonymous users.
 * ROLE_USER should be able to access /api and /media, as well the
 * admin login form, but should not be able to access the admin area.
 * Users with ROLE_SONATA_ADMIN and above should be able to access
 * the admin area.
 *
 * @author Cezar Pendarovski <cezar.pendarovski@roslin.ed.ac.uk>
 */
class ApplicationSecurityTest extends WebTestCase
{
    private $client;
    private $entityManager;
    private $fixtures = null;

    public function setUp()
    {
        $this->client = $this->createClient();
        $this->entityManager = $this->getContainer()->get('doctrine')->getManager();
        $this->fixtures = $this->loadFixtures([
            'App\DataFixtures\UserFixtures',
            'App\DataFixtures\MediaFixtures',
            'App\DataFixtures\GalleryFixtures',
        ])->getReferenceRepository();
    }

    public function tearDown()
    {
        $media = $this->fixtures->getReference('media');
        $this->entityManager->remove($media);
        $this->entityManager->flush();
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
     * Helper method.
     * Log in the user through HTTP Basic Auth
     */
    private function httpBasicLogIn($username)
    {
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];
        $this->client = $this->makeClient($credentials);
    }

    /**
     * Helper method.
     * Check that the admin area is accessed.
     * It should prove that the title 'LiveGene' is displayed.
     * It should prove that the username of the user is displayed in
     * the user block.
     */
    private function accessAdminArea(Crawler $crawler, $username)
    {
        $this->assertSame(
            'LiveGene',
            $crawler->filter('a.logo > span')->text()
        );
        $this->assertSame(
            $username,
            $crawler->filter('li.user-header > p')->text()
        );
    }

    /**
     * Test that an anonymous user can access the admin login form.
     * If the user hits the route /admin they should be redirected to
     * the admin login form (/admin/login).
     *
     * @group legacy
     */
    public function testAdminLoginForm()
    {
        $this->client->request('GET', '/admin/dashboard');
        $this->assertTrue(
            $this->client->getResponse()->isRedirect('http://localhost/admin/login')
        );
        $crawler = $this->client->followRedirect();
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->assertSame(
            'Authentication',
            $crawler->filter('div.login-box-body > p.login-box-msg')->text()
        );
    }

    /**
     * Test that ROLE_USER can not access the admin area.
     *
     * @group legacy
     */
    public function testUserCannotAccessAdminDashboard()
    {
        $username = $this->fixtures->getReference('user')->getUsername();
        $this->formLogIn($username);
        $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(
            Response::HTTP_FORBIDDEN,
            $this->client->getResponse()->getStatusCode()
        );
    }

    /**
     * Test that ROLE_SONATA_ADMIN can access the admin area.
     *
     * @group legacy
     */
    public function testSonataAdminCanAccessAdminDashboard()
    {
        $username = $this->fixtures->getReference('sonata_admin')->getUsername();
        $this->formLogIn($username);
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->accessAdminArea($crawler, $username);
    }

    /**
     * Test that ROLE_ADMIN can access the admin area.
     *
     * @group legacy
     */
    public function testAdminCanAccessAdminDashboard()
    {
        $username = $this->fixtures->getReference('admin')->getUsername();
        $this->formLogIn($username);
        $crawler = $this->client->request('GET', '/admin/dashboard');
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->accessAdminArea($crawler, $username);
    }

    /**
     * Test that ROLE_SUPER_ADMIN can access the admin area.
     * The ROLE_SUPER_ADMIN should see the admin groups provided by
     * SonataMediaBundle and SonataUserBundle.
     * We check that there is an unordered list in the sidebar menu
     * with at least one list item.
     * We check that the admin groups 'Media Library' and 'Users' are
     * present.
     *
     * @group legacy
     */
    public function testSuperAdminCanAccessAdminDashboard()
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);
        $crawler = $this->client->request('GET', '/admin/dashboard');
        
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        
        $this->accessAdminArea($crawler, $username);
        
        $this->assertGreaterThan(
            0,
            $crawler->filter('ul.sidebar-menu > li')->children()->count()
        );

        $adminGroups = ['Media Library', 'Users'];
        foreach ($adminGroups as $group) {
            $this->assertGreaterThan(
                0,
                $crawler->filter(sprintf('html:contains("%s")', $group))->count()
            );
        }
    }

    /**
     * Test that ROLE_SUPER_ADMIN can access the admins routes for
     * SonataMediaBundle MediaAdmin
     *
     * @group legacy
     *
     * @dataProvider sonataMediaBundleMediaRoutes
     */
    public function testSuperAdminCanAccessSonataMediaMediaRoutes($route)
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);
        $mediaId = $this->fixtures->getReference('media')->getId();

        $this->client->request('GET', sprintf($route, $mediaId));
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function sonataMediaBundleMediaRoutes()
    {
        yield ['/admin/sonata/media/media/list'];
        yield ['/admin/sonata/media/media/create'];
        yield ['/admin/sonata/media/media/%s/show'];
        yield ['/admin/sonata/media/media/%s/edit'];
        yield ['/admin/sonata/media/media/%s/delete'];
    }

    /**
     * Test that ROLE_SUPER_ADMIN can access the admins routes for
     * SonataMediaBundle GalleryAdmin
     *
     * @group legacy
     *
     * @dataProvider sonataMediaBundleGalleryRoutes
     */
    public function testSuperAdminCanAccessSonataMediaGalleryRoutes($route)
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);
        $galleryId = $this->fixtures->getReference('gallery')->getId();

        $this->client->request('GET', sprintf($route, $galleryId));
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function sonataMediaBundleGalleryRoutes()
    {
        yield ['/admin/sonata/media/gallery/list'];
        yield ['/admin/sonata/media/gallery/create'];
        yield ['/admin/sonata/media/gallery/%s/show'];
        yield ['/admin/sonata/media/gallery/%s/edit'];
        yield ['/admin/sonata/media/gallery/%s/delete'];
    }

    /**
     * Test that ROLE_SUPER_ADMIN can access the admins routes for
     * SonataUserBundle UserAdmin
     *
     * @group legacy
     *
     * @dataProvider sonataUserBundleUserRoutes
     */
    public function testSuperAdminCanAccessSonataUserRoutes($route)
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);
        $userId = $this->fixtures->getReference('user')->getId();

        $this->client->request('GET', sprintf($route, $userId));
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function sonataUserBundleUserRoutes()
    {
        yield ['/admin/sonata/user/user/create'];
        yield ['/admin/sonata/user/user/%s/show'];
        yield ['/admin/sonata/user/user/%s/edit'];
        yield ['/admin/sonata/user/user/%s/delete'];
    }

    /**
     * Test that ROLE_SUPER_ADMIN can access the export routes for
     * the admins provided by SonataMediaBundle and SonataUserBundle
     *
     * @group legacy
     *
     * @dataProvider adminExportRoutes
     */
    public function testSuperAdminCanAccessExportRoutes($route)
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);

        ob_start();
        $this->client->request('GET', $route);
        ob_end_clean();

        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function adminExportRoutes()
    {
        yield ['/admin/sonata/media/media/export?format=json'];
        yield ['/admin/sonata/media/gallery/export?format=json'];
        yield ['/admin/sonata/user/user/export?format=json'];
    }

    /**
     * Test that ROLE_SUPER_ADMIN has the right to impersonate other
     * users (ROLE_ALLOWED_TO_SWITCH).
     *
     * @group legacy
     */
    public function testSuperAdminCanImpersonateUser()
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);

        $crawler = $this->client->request('GET', "/admin/sonata/user/user/list");
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->assertSame(
            3,
            $crawler->filter('a[title="Impersonate User"]')->count()
        );
    }

    /**
     * Test that an anonymous user can't access the API platform.
     *
     * @group legacy
     *
     * @dataProvider apiFormats
     */
    public function testAnonymousCannotAccessApiPlatform($format)
    {
        $this->client->request('GET', sprintf('/api/index.%s', $format));
        $this->assertSame(
            Response::HTTP_UNAUTHORIZED,
            $this->client->getResponse()->getStatusCode()
        );

        $this->client->request('GET', sprintf('/api/docs.%s', $format));
        $this->assertSame(
            Response::HTTP_UNAUTHORIZED,
            $this->client->getResponse()->getStatusCode()
        );
    }

    /**
     * Test that ROLE_USER can access the API platform.
     *
     * @group legacy
     *
     * @dataProvider apiFormats
     */
    public function testUserCanAccessApiPlatform($format)
    {
        $username = $this->fixtures->getReference('user')->getUsername();
        $this->httpBasicLogIn($username);
        $this->client->request('GET', sprintf('/api/index.%s', $format));
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );

        $this->client->request('GET', sprintf('/api/docs.%s', $format));
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
    }

    public function apiFormats()
    {
        yield ['jsonld'];
        yield ['json'];
        yield ['html'];
    }

    /**
     * Test that an anonymous user can't access the routes provided by
     * SonataMediaBundle.
     *
     * @group legacy
     */
    public function testAnonymousCannotAccessMedia()
    {
        $galleryId = $this->fixtures->getReference('gallery')->getId();
        $mediaId = $this->fixtures->getReference('media')->getId();
        $this->client->request('GET', '/media/gallery/');
        $this->assertSame(
            Response::HTTP_UNAUTHORIZED,
            $this->client->getResponse()->getStatusCode()
        );
        $this->client->request('GET', sprintf('/media/gallery/view/%s/', $galleryId));
        $this->assertSame(
            Response::HTTP_UNAUTHORIZED,
            $this->client->getResponse()->getStatusCode()
        );
        $this->client->request('GET', sprintf('/media/view/%s/', $mediaId));
        $this->assertSame(
            Response::HTTP_UNAUTHORIZED,
            $this->client->getResponse()->getStatusCode()
        );
        $this->client->request('GET', sprintf('/media/download/%s/', $mediaId));
        $this->assertSame(
            Response::HTTP_UNAUTHORIZED,
            $this->client->getResponse()->getStatusCode()
        );

    }

    /**
     * Test that ROLE_USER can access the routes provided by
     * SonataMediaBundle.
     *
     * @group legacy
     */
    public function testUserCanAccessMedia()
    {
        $galleryId = $this->fixtures->getReference('gallery')->getId();
        $mediaId = $this->fixtures->getReference('media')->getId();
        $username = $this->fixtures->getReference('user')->getUsername();
        $this->httpBasicLogIn($username);

        $this->client->request('GET', '/media/gallery/');
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );

        $this->client->request('GET', sprintf('/media/gallery/view/%s/', $galleryId));
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        
        $this->client->request('GET', sprintf('/media/view/%s/', $mediaId));
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        
        ob_start();
        $this->client->request('GET', sprintf('/media/download/%s/', $mediaId));
        ob_end_clean();
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
    }
}
