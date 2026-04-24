import { useEffect, useState } from "react";

import type { Character } from "../types";
import { getCharacter } from "../api/getCharacter";
import { Card } from "./Card";

import "../index.css";

const LayoutCard = () => {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        if (characters.length === 0) {
            getCharacter(12).then((characters) => setCharacters(characters));
        }
    }, [characters.length]);

    return (
        <div className="mx-auto w-full max-w-6xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100">
            {characters.length > 0 &&
                characters.map((character) => (
                    <Card key={character.name} character={character} />
                ))}
        </div>
    )
}

export default LayoutCard;