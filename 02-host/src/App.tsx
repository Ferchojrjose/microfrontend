import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import "./index.css";

const Navbar = React.lazy(() => import("navbar/Navbar")); // Se importa el componente de Microfrontend Navbar
const CounterReact = React.lazy(() => import("counterReact/CounterReact")); // Se importa el componente de Microfrontend CounterReact


const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
    <h1 className="text-2xl font-bold">Este es el host</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <CounterReact />
    </Suspense>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);