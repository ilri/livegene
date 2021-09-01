<?php

namespace App\Tests\Entity\Traits;

use PHPUnit\Framework\TestCase;
use App\Entity\Traits\RoleTrait;

class RoleTraitTest extends TestCase
{
    public function testGetPercent(): void
    {
        $mock = $this->getMockForTrait(RoleTrait::class);

        $mock->setPercent(0.0375);

        $this->assertEquals('0.0375', $mock->getPercent());
    }
}

