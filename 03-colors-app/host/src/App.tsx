import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";

const ColorPicker = React.lazy(() => import("colorpicker/ColorPicker"));

//import "./index.css";


const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <ColorPicker />
    </Suspense>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);