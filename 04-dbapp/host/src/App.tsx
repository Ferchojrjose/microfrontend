import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Loader } from "./components";

import Navbar from "mf_navbar/Navbar"; // Importación del componente Navbar desde otro microfrontend
import "./index.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const Characters = lazy(() => import("./pages/Characters"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CharacterDetail = lazy(() => import("./pages/CharacterDetail"));


const App = () => (
  <BrowserRouter>
    <Error>
      <Navbar />
    </Error>

    {/* Rutas de la aplicación host */}
    <div className="p-6 bg-gray-300">
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loader />}><HomePage /></Suspense>} />
        <Route path="/characters" element={<Suspense fallback={<Loader />}><Characters /></Suspense>} />
        <Route path="/characters/:id" element={<Suspense fallback={<Loader />}><CharacterDetail /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<Loader />}><AboutPage /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<Loader />}><NotFound /></Suspense>} /> // Ruta para manejar las rutas no encontradas
      </Routes>
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);