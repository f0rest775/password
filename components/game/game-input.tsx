"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface GameInputProps {
  guess: string;
  onGuessChange: (value: string) => void;
  onSubmit: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export function GameInput({ guess, onGuessChange, onSubmit, onKeyPress }: GameInputProps) {
  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Input
          type="number"
          min="1"
          max="12"
          placeholder="Digite o número do mês..."
          value={guess}
          onChange={(e) => onGuessChange(e.target.value)}
          onKeyPress={onKeyPress}
          className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 pr-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      <Button
        onClick={onSubmit}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-[1.02]"
      >
        Verificar
      </Button>
    </div>
  );
}