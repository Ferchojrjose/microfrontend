import ReactDOM from "react-dom/client";

import CharacterDetail from "./components/CharacterDetail";
import "./index.css";

const App = () => (
  <CharacterDetail />
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);