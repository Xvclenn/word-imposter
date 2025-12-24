"use client";

import { Button } from "@/components/ui/button";
import { useGame } from "@/context/GameContext";
import { GameMode } from "@/types/game";

export function ModeToggle() {
    const { state, dispatch } = useGame();

    const toggleMode = () => {
        const newMode: GameMode = state.mode === "LOCAL" ? "ONLINE" : "LOCAL";
        dispatch({ type: "SET_MODE", payload: newMode });
    };

    return (
        <div className="flex justify-center">
            <Button
                size="sm"
                variant="outline"
                onClick={toggleMode}
                className="cursor-pointer"
            >
                {state.mode === "LOCAL" ? "Онлайн горим" : "Нэг нэгээрээ горим"}
            </Button>
        </div>
    );
}
