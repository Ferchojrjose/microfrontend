import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import "./index.css";

const Navbar = React.lazy(() => import("navbar/Navbar")); // Se importa el componente de Microfrontend Navbar
const CounterReact = React.lazy(() => import("counterReact/CounterReact")); // Se importa el componente de Microfrontend CounterReact


const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div className="my-4 mx-10">
        <h2>Counter MF</h2>
        <CounterReact />
      </div>
    </Suspense>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);