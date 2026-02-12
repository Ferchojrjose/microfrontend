import { useState, useEffect } from "react";
import { getLastColor, getColorsList } from "../helpers/getColors";

export const useColors = () => {

    const [color, setColor] = useState(getLastColor());
    const [colorsList, setColorsList] = useState<string[]>(getColorsList());

    // guardar lista de colores en localStorage 
    useEffect(() => {
        if (colorsList.length > 0) {
            localStorage.setItem("colorsList", JSON.stringify(colorsList));
        }
    }, [colorsList]);

    // Manejador del evento de envío del formulario
    const handleAddColor = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setColorsList([color, ...colorsList]);
        console.log("colorsList", colorsList);
    }

    // limpiar lista de colores
    const clearColorsList = () => {
        setColorsList([]);
    }

    return { color, setColor, colorsList, setColorsList, handleAddColor };
}
