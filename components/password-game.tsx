"use client";

import { GameContainer } from "./game/layout/game-container";
import { GameHeader } from "./game/header/game-header";
import { GameInput } from "./game/game-input";
import { GameMessage } from "./game/game-message";
import { RevealedPassword } from "./game/revealed-password";
import { useGameState } from "@/lib/hooks/use-game-state";

export function PasswordGame() {
  const {
    guess,
    setGuess,
    message,
    showPassword,
    handleSubmit,
    handleKeyPress,
  } = useGameState();

  return (
    <GameContainer>
      <GameHeader showPassword={showPassword} />
      <GameInput 
        guess={guess} 
        onGuessChange={setGuess} 
        onSubmit={handleSubmit}
        onKeyPress={handleKeyPress}
      />
      <GameMessage 
        message={message} 
        showPassword={showPassword} 
      />
      {showPassword && <RevealedPassword />}
    </GameContainer>
  );
}