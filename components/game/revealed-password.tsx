"use client";

import { PartyPopper } from "lucide-react";
import { GAME_CONFIG } from "@/lib/constants";

export function RevealedPassword() {
  return (
    <div className="flex flex-col items-center space-y-4 animate-fade-in">
      <div className="flex items-center space-x-4">
        <PartyPopper className="w-8 h-8 text-yellow-400 animate-bounce" />
        <span className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          {GAME_CONFIG.FULL_PASSWORD}
        </span>
        <PartyPopper className="w-8 h-8 text-yellow-400 animate-bounce" />
      </div>
      <p className="text-green-400 text-sm">
        🎊 Feliz Ano Novo! 🎊
      </p>
    </div>
  );
}