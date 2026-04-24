import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";


//Metodo para obtener la clase activa
const getActiveClass = (isActive: boolean) => isActive ? "rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-600" : "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600";


const Navbar = () => {
    return (
        <nav className="flex h-14 items-center justify-between border-b border-gray-700 bg-gray-800 px-6 shadow-sm">
            {/* Opciones izquierda */}
            <div className="flex gap-6">
                <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
                    Inicio
                </NavLink>
                <NavLink to="/characters" className={({ isActive }) => getActiveClass(isActive)}>
                    Personajes
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => getActiveClass(isActive)}>
                    Acerca de
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
