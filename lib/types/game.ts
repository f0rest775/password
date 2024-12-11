export interface GameState {
  guess: string;
  message: string;
  showPassword: boolean;
}

export interface GameAction {
  type: 'SET_GUESS' | 'CHECK_ANSWER' | 'RESET';
  payload?: string;
}