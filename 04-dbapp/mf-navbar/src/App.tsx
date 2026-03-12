import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <Navbar />

    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <h1>Home page</h1>
      <p>This is the home page</p>
      <p>This is the home page</p>
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);