export type Role = "NORMAL" | "IMPOSTER";

export type Player = {
    id: number;
    name: string;
    role: Role;
    word?: string;
};

export type GamePhase = "SETUP" | "SHOW_WORD" | "PLAY" | "VOTE" | "RESULT";

export type GameMode = "LOCAL" | "ONLINE";

export type GameState = {
    players: Player[];
    currentPlayerIndex: number;
    phase: GamePhase;
    secretWord: string;
    mode: GameMode;
    revealedImposterId?: number;
};
