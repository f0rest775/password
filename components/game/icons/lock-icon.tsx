"use client";

import { Lock, Unlock } from "lucide-react";

interface LockIconProps {
  isUnlocked: boolean;
}

export function LockIcon({ isUnlocked }: LockIconProps) {
  if (isUnlocked) {
    return <Unlock className="w-16 h-16 text-yellow-400 animate-bounce" />;
  }
  return <Lock className="w-16 h-16 text-gray-300" />;
}