"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGame } from "@/context/GameContext";
import { getCurrentPlayer } from "@/engine/getCurrentPlayer";

export function ShowWordScreen() {
    const { state, dispatch } = useGame();
    const player = getCurrentPlayer(state);

    const [revealed, setRevealed] = useState(false);

    function handlePass() {
        setRevealed(false);

        if (state.currentPlayerIndex === state.players.length - 1) {
            dispatch({ type: "SET_PHASE", payload: "PLAY" });
        } else {
            dispatch({ type: "NEXT_PLAYER" });
        }
    }

    return (
        <div className="text-center flex flex-col justify-between gap-6">
            {/* <h1 className="text-xl font-bold text-left">
                Тоглогч: {player.name}
            </h1> */}

            <div className="border min-h-35 p-6 rounded-lg bg-background flex items-center justify-center">
                {!revealed ? (
                    <span className="text-2xl font-bold">{player.name}</span>
                ) : (
                    <div className="space-y-4">
                        <div>
                            {player.role === "IMPOSTER" ? (
                                <p className="text-xl font-bold">
                                    <>{player.name}</>
                                    <br />
                                    <span className="text-sm font-light text-slate-400">
                                        чи бол:
                                    </span>
                                    <br />
                                    <span className="text-red-700 font-extrabold text-2xl">
                                        IMPOSTER
                                    </span>
                                    <br />
                                    <span className="text-sm font-light text-slate-400">
                                        Зөвлөмж: Сэжигтэй үйлдэл битгий гарга
                                        хэвийн байгаарай. 📦
                                    </span>
                                </p>
                            ) : (
                                <p className="text-xl font-bold">
                                    <>{player.name}</>
                                    <br />
                                    <span className="text-sm font-light text-slate-400">
                                        чиний үг бол:
                                    </span>
                                    <br />
                                    {state.secretWord}
                                    <br />
                                    <span className="text-sm font-light text-slate-400">
                                        Зөвлөмж: Imposter сонсож байгаа гэдгийг
                                        санаарай 👀.
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {!revealed ? (
                <Button
                    className="cursor-pointer"
                    onClick={() => setRevealed(true)}
                >
                    Тоглогч {player.name} юу вэ?
                </Button>
            ) : (
                <Button className="cursor-pointer" onClick={handlePass}>
                    Next
                </Button>
            )}
        </div>
    );
}
