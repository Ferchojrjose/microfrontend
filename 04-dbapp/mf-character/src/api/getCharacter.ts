import type { Character } from "../types";

// Metodo para obtener los personajes de la API de Dragon Ball
export const getCharacter = async (limit: number): Promise<Character[]> => {
    const response = await fetch(
        `https://dragonball-api.com/api/characters?limit=${limit}`
    );

    const data = await response.json();


    const characters: Character[] = data.items.map(
        ({ id, name, image, description, gender }: Character) => ({
            id,
            name,
            image,
            description,
            gender,
        })
    );

    return characters;
};
