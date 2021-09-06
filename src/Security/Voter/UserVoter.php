<?php

namespace App\Security\Voter;

use App\Application\Sonata\UserBundle\Entity\User;
use LogicException;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class UserVoter extends Voter
{
    const VIEW = 'ROLE_SONATA_USER_ADMIN_USER_VIEW';
    const EDIT = 'ROLE_SONATA_USER_ADMIN_USER_EDIT';

    protected function supports($attribute, $subject): bool
    {
        // if the attribute isn't one we support, return false
        if (!in_array($attribute, [self::VIEW, self::EDIT])) {
            return false;
        }

        if (!$subject instanceof User) {
            return false;
        }

        return true;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            // the user must be logged in; if not, deny access
            return false;
        }

        switch ($attribute) {
            case self::VIEW:
                return $this->canView($subject, $user);
            case self::EDIT:
                return $this->canEdit($subject, $user);
        }

        throw new LogicException('This code should not be reached!');
    }

    private function canView(User $subject, User $user): bool
    {
        // if they can edit, they can view
        return $this->canEdit($subject, $user);
    }

    private function canEdit(User $subject, User $user): bool
    {
        return $user === $subject;
    }
}
