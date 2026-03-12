import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Characters, AboutPage, NotFound } from "./pages";

import Navbar from "mf_navbar/Navbar"; // Importación del componente Navbar desde otro microfrontend

import "./index.css";
import { Suspense } from "react";

const App = () => (
  <BrowserRouter>

    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>

    {/* Rutas de la aplicación host */}
    <div className="p-6 bg-gray-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} /> // Ruta para manejar las rutas no encontradas
      </Routes>
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);