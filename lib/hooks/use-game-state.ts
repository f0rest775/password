"use client";

import { useState, useCallback } from "react";
import { GAME_CONFIG, MESSAGES } from "@/lib/constants";
import { useConfetti } from "./use-confetti";

export function useGameState() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { triggerConfetti } = useConfetti();

  const handleSubmit = useCallback(() => {
    if (!guess) {
      setMessage("Por favor, digite um número.");
      return;
    }

    const guessNumber = parseInt(guess, 10);
    if (guessNumber < 1 || guessNumber > 12) {
      setMessage("Por favor, digite um número entre 1 e 12.");
      return;
    }

    if (guess === GAME_CONFIG.CORRECT_MONTH) {
      setMessage(MESSAGES.SUCCESS);
      setShowPassword(true);
      triggerConfetti();
    } else {
      const monthName = new Date(2024, parseInt(guess) - 1).toLocaleString('pt-BR', { month: 'long' });
      setMessage(MESSAGES.ERROR(monthName));
      setShowPassword(false);
    }
  }, [guess, triggerConfetti]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }, [handleSubmit]);

  return {
    guess,
    setGuess,
    message,
    showPassword,
    handleSubmit,
    handleKeyPress,
  };
}