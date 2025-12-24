"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { GameState, GameMode } from "@/types/game";
import { gameReducer, initialGameState, GameAction } from "./gameReducer";

type GameContextType = {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(gameReducer, initialGameState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (!context) throw new Error("useGame must be used within GameProvider");
    return context;
}
