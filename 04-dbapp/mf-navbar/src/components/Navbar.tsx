import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";


//Metodo para obtener la clase activa
const getActiveClass = (isActive: boolean) => isActive ? "rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-600" : "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600";


const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Cerrar el dropdown cuando se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

            {/* Botón con menú desplegable derecha */}
            <div ref={dropdownRef} className="relative">
                <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    Menú
                    <svg
                        className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-gray-600 bg-gray-800 py-1 shadow-lg">
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
                            Opción 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
                            Opción 2
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
                            Opción 3
                        </a>
                    </div>    
                )}
            </div>
        </nav>
    );
};

export default Navbar;
