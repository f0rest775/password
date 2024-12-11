export const GAME_CONFIG = {
  CORRECT_MONTH: "7",
  CORRECT_TIME: "15",
  FULL_PASSWORD: "157",
} as const;

export const MESSAGES = {
  SUCCESS: "🎉 Parabéns! Você acertou! A senha está revelada!",
  ERROR: (month: string) => `😢 Ops! O mês de ${month} não está correto. Tente novamente!`,
  EMPTY: "Por favor, digite um número.",
  INVALID_RANGE: "Por favor, digite um número entre 1 e 12.",
} as const;