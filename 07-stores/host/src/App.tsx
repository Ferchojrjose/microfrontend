import ReactDOM from "react-dom/client";

import StoreProvider from "mf_store/StoreProvider"; // StoreProvider de la app (contexto de Redux en el microfrontend)
import { useCounterStore } from "mf_store/StoreProvider"; // Hook para usar el store de Redux en el microfrontend
import Navbar from "mf_nav/Navbar"; // Navbar de la app (microfrontend)
import Counter from "mf_counter/Counter"; // Counter de la app (microfrontend)

import "./index.css";

const App = () => {
  
  const { counter, increment, decrement } = useCounterStore(); // Hook para usar el store de Redux en el microfrontend

  return (
    <>
      <Navbar />
      <Counter />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<StoreProvider><App /></StoreProvider>);