import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);