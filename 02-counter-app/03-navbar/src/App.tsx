import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar'

import "./index.css";

const App = () => (
  <>
    <Navbar />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);