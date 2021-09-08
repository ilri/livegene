<?php

namespace App\Tests\Mailer;

use App\DataFixtures\Test\UserFixtures;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Bundle\SwiftmailerBundle\DataCollector\MessageDataCollector;
use Symfony\Component\DomCrawler\Crawler;

class UserMailerTest extends WebTestCase
{
    private ?KernelBrowser $client = null;
    private ?object $user = null;

    /**
     * Load the user fixtures, get one example user and reset the value
     * for passwordRequestedAt to null.
     * The user can request a password reset once in two hours.
     * By setting the above-mentioned value to null we ensure the test
     * can run multiple consecutive times with the same expected result.
     */
    public function setUp(): void
    {
        $this->client = $this->createClient();
        $databaseTool = $this->client->getContainer()->get(DatabaseToolCollection::class)->get();
        $fixtures = $databaseTool->loadFixtures([
            UserFixtures::class
        ])->getReferenceRepository();
        $this->user = $fixtures->getReference('super_admin');
        $this->user->setPasswordRequestedAt(null);
    }

    /**
     * Test that an email is sent to the user when they request a new
     * password.
     * The subject of the email is "Reset your password".
     * The email should be sent by the address specified in the
     * parameters section in the config files.
     */
    public function testMailIsSentAndContentIsOk(): void
    {
        $this->client->enableProfiler();
        $this->client->request(
            'POST',
            '/admin/resetting/send-email',
            [
                'username' => $this->user->getUsername()
            ]
        );
        $mailerUser = $this->client->getContainer()->getParameter('mailer_user');

        /** @var MessageDataCollector $mailCollector */
        $mailCollector = $this->client->getProfile()->getCollector('swiftmailer');

        $this->assertSame(1, $mailCollector->getMessageCount());

        $collectedMessages = $mailCollector->getMessages();
        $message = $collectedMessages[0];

        $crawler = new Crawler();
        $crawler->addHtmlContent($message->getBody());

        $this->assertInstanceOf('Swift_Message', $message);
        $this->assertSame('Reset your password', $message->getSubject());
        $this->assertSame($mailerUser, key($message->getFrom()));
        $this->assertSame($this->user->getEmail(), key($message->getTo()));
        $this->assertStringContainsString('ILRI LiveGene', $crawler->filter('h1')->text());
        $this->assertStringContainsString('Reset your password', $crawler->filter('h2')->text());
        $this->assertStringContainsString('Your ILRI LiveGene Admin', $crawler->filter('h4')->text());
    }
}
