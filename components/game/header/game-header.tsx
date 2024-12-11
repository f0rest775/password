"use client";

import { LockIcon } from "../icons/lock-icon";
import { GameTitle } from "../ui/game-title";
import { GameDescription } from "../ui/game-description";

interface GameHeaderProps {
  showPassword: boolean;
}

export function GameHeader({ showPassword }: GameHeaderProps) {
  return (
    <>
      <LockIcon isUnlocked={showPassword} />
      <GameTitle />
      <GameDescription />
    </>
  );
}