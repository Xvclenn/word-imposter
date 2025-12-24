"use client";

import { Button } from "@/components/ui/button";
import { useGame } from "@/context/GameContext";

export function PlayPhaseControls() {
    const { state, dispatch } = useGame();

    const restartGame = () => {
        dispatch({ type: "RESTART_GAME" });
    };

    const revealImposter = () => {
        const imposter = state.players.find((p) => p.role === "IMPOSTER");
        if (imposter) {
            dispatch({ type: "REVEAL_IMPOSTER", payload: imposter.id });
        }
    };

    const revealedPlayer =
        state.revealedImposterId !== undefined
            ? state.players.find((p) => p.id === state.revealedImposterId)
            : null;

    return (
        <div className="mt-4 flex items-center justify-between gap-2">
            {!revealedPlayer && (
                <Button
                    className="w-full cursor-pointer"
                    onClick={revealImposter}
                >
                    Imposter-ийг олцгооё 🕵️‍♂️
                </Button>
            )}

            {revealedPlayer && (
                <Button
                    className="w-full cursor-pointer"
                    variant="destructive"
                    onClick={restartGame}
                >
                    Дахин тоглох 🔄
                </Button>
            )}
        </div>
    );
}
