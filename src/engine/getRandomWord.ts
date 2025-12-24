import { WORDS } from "./words";

export function getRandomWord(): string {
    const index = Math.floor(Math.random() * WORDS.length);
    return WORDS[index];
}
