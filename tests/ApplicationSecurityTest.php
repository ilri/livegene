<?php

namespace App\Tests;

use App\DataFixtures\Test\UserFixtures;
use Doctrine\Common\DataFixtures\ReferenceRepository;
use Doctrine\ORM\{
    EntityManager,
    OptimisticLockException,
    ORMException,
};
use Liip\FunctionalTestBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\HttpFoundation\Response;

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
    private KernelBrowser $client;
    private EntityManager $entityManager;
    private ?ReferenceRepository $fixtures = null;

    public function setUp(): void
    {
        $this->client = $this->createClient();
        $this->entityManager = $this->getContainer()->get('doctrine')->getManager();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $this->fixtures = $databaseTool->loadFixtures([
            'App\DataFixtures\Test\UserFixtures',
            'App\DataFixtures\Test\MediaFixtures',
            'App\DataFixtures\Test\GalleryFixtures',
        ])->getReferenceRepository();
    }

    /**
     * TODO: this method has to be refactored.
     * The deprecated method has no replacement. Another logic should
     * be implemented.
     * The exceptions should be handled in the method body.
     *
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function tearDown(): void
    {
        $media = $this->fixtures->getReference('media');
        $media = $this->entityManager->merge($media);
        $this->entityManager->remove($media);
        $this->entityManager->flush();

        parent::tearDown();
    }

    /**
     * Helper method.
     * Log in the user through the admin login form.
     */
    private function formLogIn($username): void
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
     * Get token for JWT authentication.
     */
    private function getJsonWebToken($username): void
    {
        $credentials = [
            'username' => $username,
            'password' => UserFixtures::PASSWORD
        ];
        $this->client = $this->createClient();
        $this->client->request('POST', '/authentication_token', [], [], [
            'CONTENT_TYPE' => 'application/json'
        ], json_encode($credentials));

        $data = json_decode($this->client->getResponse()->getContent(), true);

        $this->client->setServerParameter('HTTP_Authorization', sprintf('Bearer %s', $data['token']));
    }

    /**
     * Helper method.
     * Check that the admin area is accessed.
     * It should prove that the title 'LiveGene' is displayed.
     * It should prove that the username of the user is displayed in
     * the user block.
     */
    private function accessAdminArea(Crawler $crawler, $username): void
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
     */
    public function testAdminLoginForm(): void
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
     */
    public function testUserCannotAccessAdminDashboard(): void
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
     */
    public function testSonataAdminCanAccessAdminDashboard(): void
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
     */
    public function testAdminCanAccessAdminDashboard(): void
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
     */
    public function testSuperAdminCanAccessAdminDashboard(): void
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
     * @dataProvider sonataMediaBundleMediaRoutes
     */
    public function testSuperAdminCanAccessSonataMediaMediaRoutes($route): void
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);
        $mediaId = $this->fixtures->getReference('media')->getId();

        $this->client->request('GET', sprintf($route, $mediaId));
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function sonataMediaBundleMediaRoutes(): \Generator
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
     * @dataProvider sonataMediaBundleGalleryRoutes
     */
    public function testSuperAdminCanAccessSonataMediaGalleryRoutes($route): void
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);
        $galleryId = $this->fixtures->getReference('gallery')->getId();

        $this->client->request('GET', sprintf($route, $galleryId));
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function sonataMediaBundleGalleryRoutes(): \Generator
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
     * @dataProvider sonataUserBundleUserRoutes
     */
    public function testSuperAdminCanAccessSonataUserRoutes($route): void
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);
        $userId = $this->fixtures->getReference('user')->getId();

        $this->client->request('GET', sprintf($route, $userId));
        $this->assertTrue(
            $this->client->getResponse()->isSuccessful()
        );
    }

    public function sonataUserBundleUserRoutes(): \Generator
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
     * @dataProvider adminExportRoutes
     */
    public function testSuperAdminCanAccessExportRoutes($route): void
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

    public function adminExportRoutes(): \Generator
    {
        yield ['/admin/sonata/media/media/export?format=json'];
        yield ['/admin/sonata/media/gallery/export?format=json'];
        yield ['/admin/sonata/user/user/export?format=json'];
    }

    /**
     * Test that ROLE_SUPER_ADMIN has the right to impersonate other
     * users (ROLE_ALLOWED_TO_SWITCH).
     */
    public function testSuperAdminCanImpersonateUser(): void
    {
        $username = $this->fixtures->getReference('super_admin')->getUsername();
        $this->formLogIn($username);

        $crawler = $this->client->request('GET', "/admin/sonata/user/user/list");
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
        $this->assertSame(
            5,
            $crawler->filter('a[title="Impersonate User"]')->count()
        );
    }

    /**
     * Test that an anonymous user can't access the API platform.
     *
     * @dataProvider apiFormats
     */
    public function testAnonymousCannotAccessApiPlatform($format): void
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
     * @dataProvider apiFormats
     */
    public function testUserCanAccessApiPlatform($format): void
    {
        $username = $this->fixtures->getReference('api_user')->getUsername();
        $this->getJsonWebToken($username);
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

    public function apiFormats(): \Generator
    {
        yield ['jsonld'];
        yield ['json'];
        yield ['html'];
    }

    /**
     * Test that an anonymous user can't access the routes provided by
     * SonataMediaBundle.
     */
    public function testAnonymousCannotAccessMedia(): void
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
     */
    public function testUserCanAccessMedia(): void
    {
        $galleryId = $this->fixtures->getReference('gallery')->getId();
        $mediaId = $this->fixtures->getReference('media')->getId();
        $username = $this->fixtures->getReference('user')->getUsername();
        $this->getJsonWebToken($username);

        $this->client->request('GET', '/media/gallery/');
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );

        $this->client->request('GET', sprintf('/media/gallery/view/%s', $galleryId));
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );

        $this->client->request('GET', sprintf('/media/view/%s', $mediaId));
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );

        ob_start();
        $this->client->request('GET', sprintf('/media/download/%s', $mediaId));
        ob_end_clean();
        $this->assertSame(
            Response::HTTP_OK,
            $this->client->getResponse()->getStatusCode()
        );
    }
}
