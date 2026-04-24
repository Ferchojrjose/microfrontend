import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterByName } from "../services";
import { Character } from "../types";

import "../index.css";

const CharacterDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        if (id) {
            getCharacterByName(id).then(character => {
                setCharacter(character);
            });
        }
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!character) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center text-slate-500">
                Cargando personaje...
            </div>
        );
    }

    return (
        <section className="mx-auto w-full max-w-5xl p-4 md:p-8">
            <button
                onClick={handleBack}
                className="group mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 active:scale-95 transition cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.06 10l3.73 3.71a.75.75 0 1 1-1.06 1.06l-4.25-4.24a.75.75 0 0 1 0-1.06l4.25-4.24a.75.75 0 0 1 1.06 0z"
                        clipRule="evenodd"
                    />
                </svg>
                Regresar
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center justify-center bg-linear-to-br from-slate-100 to-slate-200 p-6">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="max-h-[420px] w-auto object-contain drop-shadow-xl"
                    />
                </div>

                <div className="flex flex-col justify-center p-6 md:p-8 gap-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
                        {character.name}
                    </h1>

                    <span className="inline-flex w-fit items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                        {character.gender}
                    </span>

                    <p className="text-base leading-relaxed text-slate-600">
                        {character.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CharacterDetail;