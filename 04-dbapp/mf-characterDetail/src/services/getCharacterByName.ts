import type { Character } from "../types";

export const getCharacterByName = async (id: string): Promise<Character> => {
    const response = await fetch(
        `https://dragonball-api.com/api/characters/${(id)}`
    );

    if (!response.ok) {
        throw new Error(`Personaje "${id}" no encontrado`);
    }

    const data: Character = await response.json();
    //console.log(data);

    return data;
};
