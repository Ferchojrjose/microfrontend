import ReactDOM from "react-dom/client";
import ColorPicker from "./components/ColorPicker";


import "./index.css";


const App = () => (
  <>
    <ColorPicker />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);