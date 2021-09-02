<?php

namespace App\Tests\Entity\Traits;

use App\Entity\Traits\RoleTrait;
use PHPUnit\Framework\TestCase;

class RoleTraitTest extends TestCase
{
    public function testGetPercent(): void
    {
        $mock = $this->getMockForTrait(RoleTrait::class);

        $mock->setPercent(0.0375);

        $this->assertEquals('0.0375', $mock->getPercent());
    }
}

