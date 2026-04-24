import ReactDOM from "react-dom/client";
import { LayoutCard } from "./components";

import "./index.css";

const App = () => (
  <LayoutCard />
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);