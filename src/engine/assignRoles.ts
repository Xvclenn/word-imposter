import { Player } from "@/types/game";

export function assignRoles(players: Player[]): Player[] {
    const impostorIndex = Math.floor(Math.random() * players.length);

    return players.map((player, index) => ({
        ...player,
        role: index === impostorIndex ? "IMPOSTER" : "NORMAL",
    }));
}
