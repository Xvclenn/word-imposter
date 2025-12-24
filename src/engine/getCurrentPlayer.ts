import { GameState } from "@/types/game";

export function getCurrentPlayer(state: GameState) {
    return state.players[state.currentPlayerIndex];
}
