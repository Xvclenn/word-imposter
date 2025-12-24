import { GameState, Player, GameMode } from "@/types/game";

export type GameAction =
    | { type: "SET_PLAYERS"; payload: Player[] }
    | { type: "START_GAME"; payload: { secretWord: string } }
    | { type: "NEXT_PLAYER" }
    | { type: "SET_PHASE"; payload: GameState["phase"] }
    | { type: "SET_MODE"; payload: GameMode }
    | { type: "REVEAL_IMPOSTER"; payload: number }
    | { type: "RESTART_GAME" };

export const initialGameState: GameState = {
    players: [],
    currentPlayerIndex: 0,
    phase: "SETUP",
    secretWord: "",
    mode: "LOCAL",
};

export function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
        case "SET_PLAYERS":
            return { ...state, players: action.payload };

        case "START_GAME":
            return {
                ...state,
                secretWord: action.payload.secretWord,
                phase: "SHOW_WORD",
                currentPlayerIndex: 0,
            };

        case "NEXT_PLAYER":
            return {
                ...state,
                currentPlayerIndex:
                    (state.currentPlayerIndex + 1) % state.players.length,
            };

        case "SET_PHASE":
            return { ...state, phase: action.payload };

        case "SET_MODE":
            return { ...state, mode: action.payload };

        case "REVEAL_IMPOSTER":
            return { ...state, revealedImposterId: action.payload };

        case "RESTART_GAME":
            return {
                ...state,
                phase: "SETUP",
                currentPlayerIndex: 0,
                secretWord: "",
                revealedImposterId: undefined,
                players: state.players.map((p) => ({
                    ...p,
                    role: "NORMAL",
                    word: undefined,
                })),
            };

        default:
            return state;
    }
}
