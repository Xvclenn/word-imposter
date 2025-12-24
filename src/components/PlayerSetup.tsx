"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGame } from "@/context/GameContext";
import { Player } from "@/types/game";
import { assignRoles } from "@/engine/assignRoles";
import { getRandomWord } from "@/engine/getRandomWord";

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 10;

export function PlayerSetup() {
    const { dispatch } = useGame();
    const [names, setNames] = useState<string[]>(["", "", ""]);
    const [error, setError] = useState<string | null>(null);

    function updateName(index: number, value: string) {
        const copy = [...names];
        copy[index] = value;
        setNames(copy);
    }

    function addPlayer() {
        if (names.length >= MAX_PLAYERS) {
            setError(`Хамгийн ихдээ ${MAX_PLAYERS} тоглогч нэмэх боломжтой`);
            return;
        }
        setNames([...names, ""]);
        setError(null);
    }

    function removePlayer(index: number) {
        if (names.length <= MIN_PLAYERS) return;
        setNames(names.filter((_, i) => i !== index));
        setError(null);
    }

    function canStart(): boolean {
        const filledNames = names.filter((n) => n.trim() !== "");
        const uniqueNames = Array.from(new Set(filledNames));
        return (
            filledNames.length >= MIN_PLAYERS &&
            filledNames.length === uniqueNames.length
        );
    }

    function startGame() {
        // Хоосон нэрийг default нэрээр солих
        const finalNames = names.map((n, i) => n.trim() || `Тоглогч ${i + 1}`);
        const uniqueNames = Array.from(new Set(finalNames));

        if (uniqueNames.length < MIN_PLAYERS) {
            setError(
                `Тоглоом эхлүүлэхийн тулд дор хаяж ${MIN_PLAYERS} тоглогч байх ёстой`
            );
            return;
        }

        if (finalNames.length !== uniqueNames.length) {
            setError(`Тоглогчдын нэр давхцахгүй байх ёстой`);
            return;
        }

        const players: Player[] = finalNames.map((name, index) => ({
            id: index,
            name,
            role: "NORMAL",
        }));

        const assigned = assignRoles(players);

        dispatch({ type: "SET_PLAYERS", payload: assigned });
        dispatch({
            type: "START_GAME",
            payload: { secretWord: getRandomWord() }, // Хүсвэл dynamic болгож болно
        });
    }

    return (
        <div className="space-y-4 max-w-md mx-auto">
            {names.map((name, i) => (
                <div key={i} className="flex gap-2 items-center">
                    <Input
                        placeholder={`Тоглогч ${i + 1}`}
                        value={name}
                        onChange={(e) => updateName(i, e.target.value)}
                    />
                    {names.length > MIN_PLAYERS && (
                        <Button
                            className="rounded-full p-2 w-6 h-6 flex items-center justify-center cursor-pointer"
                            variant="destructive"
                            onClick={() => removePlayer(i)}
                        >
                            <span className="text-xs">✕</span>
                        </Button>
                    )}
                </div>
            ))}

            <div className="flex justify-between items-center">
                <Button
                    className="cursor-pointer"
                    variant="outline"
                    onClick={addPlayer}
                    disabled={names.length >= MAX_PLAYERS}
                >
                    + Тоглогч нэмэх
                </Button>
                {MAX_PLAYERS === names.length ? (
                    <p className="text-sm text-slate-500">
                        Тоглогчдын тоо {MAX_PLAYERS} аас хэтрэхгүй
                    </p>
                ) : null}
            </div>

            {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <Button
                className="w-full cursor-pointer bg-green-700 hover:bg-green-800 text-white hover:font-bold transition-all"
                onClick={startGame}
            >
                Тоглоомыг эхлүүлэх
            </Button>
        </div>
    );
}
