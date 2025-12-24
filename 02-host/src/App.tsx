import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import "./index.css";

const Navbar = React.lazy(() => import("navbar/Navbar")); // Se importa el componente de forma lazy para evitar el warning de React.lazy

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
    <h1 className="text-2xl font-bold">Host</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);