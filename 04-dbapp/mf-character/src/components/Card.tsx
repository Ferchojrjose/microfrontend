import { Link } from "react-router-dom";

import type { Character } from "../types";

export const Card = ({ character }: { character: Character }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
            <img
                src={character.image}
                alt={character.name}
                className="h-24 w-24 object-contain"
            />
            <Link
                to={`/characters/${character.id}`}
                className="mt-3 text-lg font-bold text-slate-800 hover:text-indigo-600 hover:underline transition-colors"
            >
                {character.name}
            </Link>
            <p className="text-xs uppercase tracking-wide text-gray-400">
                {character.gender}
            </p>
            <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                {character.description}
            </p>
        </div>
    )
}