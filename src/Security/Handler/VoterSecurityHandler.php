<?php

declare(strict_types=1);

namespace App\Security\Handler;

use Sonata\AdminBundle\Admin\AdminInterface;
use Sonata\AdminBundle\Security\Handler\SecurityHandlerInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationCredentialsNotFoundException;

class VoterSecurityHandler implements SecurityHandlerInterface
{
    private AuthorizationCheckerInterface $authorizationChecker;

    private array $superAdminRoles;

    /**
     * @param AuthorizationCheckerInterface $authorizationChecker
     * @param array $superAdminRoles
     */
    public function __construct(AuthorizationCheckerInterface $authorizationChecker, array $superAdminRoles)
    {
        $this->authorizationChecker = $authorizationChecker;
        $this->superAdminRoles = $superAdminRoles;
    }

    /**
     * @param AdminInterface $admin
     * @param array|string $attributes
     * @param null $object
     * @return bool
     */
    public function isGranted(AdminInterface $admin, $attributes, $object = null): bool
    {
        if (!is_array($attributes)) {
            $attributes = [$attributes];
        }

        foreach ($attributes as $pos => $attribute) {
            $attributes[$pos] = sprintf($this->getBaseRole($admin), $attribute);
        }

        $allRole = sprintf($this->getBaseRole($admin), 'ALL');

        try {
            return $this->authorizationChecker->isGranted($this->superAdminRoles)
                || $this->authorizationChecker->isGranted($attributes, $object)
                || $this->authorizationChecker->isGranted([$allRole], $object)
            ;
        } catch (AuthenticationCredentialsNotFoundException $e) {
            return false;
        }
    }

    /**
     * @param AdminInterface $admin
     * @return string
     */
    public function getBaseRole(AdminInterface $admin): string
    {
        return 'ROLE_'.str_replace('.', '_', strtoupper($admin->getCode())).'_%s';
    }

    /**
     * @param AdminInterface $admin
     * @return array
     */
    public function buildSecurityInformation(AdminInterface $admin): array
    {
        return [];
    }

    /**
     * @param AdminInterface $admin
     * @param object $object
     */
    public function createObjectSecurity(AdminInterface $admin, $object)
    {
    }

    /**
     * @param AdminInterface $admin
     * @param object $object
     */
    public function deleteObjectSecurity(AdminInterface $admin, $object)
    {
    }
}

