"use client";

import { Lock, Unlock } from "lucide-react";

interface GameHeaderProps {
  showPassword: boolean;
}

export function GameHeader({ showPassword }: GameHeaderProps) {
  return (
    <>
      {showPassword ? (
        <Unlock className="w-16 h-16 text-yellow-400 animate-bounce" />
      ) : (
        <Lock className="w-16 h-16 text-gray-300" />
      )}

      <h1 className="text-2xl font-bold text-white text-center">
        Agora vamos ver se é verdade, quem ganhou um concurso de memória! 🤔
      </h1>

      <p className="text-gray-200 text-center">
        A senha contém 3 dígitos. Sabemos que 15 foi o horário que você me mandou a primeira mensagem.
        Coloque abaixo o número do mês que você me mandou a primeira mensagem para descobrir a senha completa!
        Você só terá acesso aos privilégios do seu presente ao acerta a senha da caixa.
      </p>
    </>
  );
}