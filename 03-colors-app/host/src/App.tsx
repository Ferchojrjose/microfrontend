import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";

const ColorPicker = React.lazy(() => import("colorpicker/ColorPicker"));
const ColorList = React.lazy(() => import("colorlist/ColorList"));

import "./index.css";


const App = () => (
  <>
    <h1 className="text-center bg-zinc-600 text-white p-4 text-2xl">Color Picker</h1>
    <div className="mt-4 p-4 rounded-lg max-w-6xl mx-auto">
      <div className="flex flex-row gap-4">
        <div className="w-full flex flex-col justify-center items-center md:w-1/3 border-zinc-300 border-2 rounded-lg p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <ColorList />
          </Suspense>
        </div>
        <div className="w-full md:w-2/3">
          <Suspense fallback={<div>Loading...</div>}>
            <ColorPicker />
          </Suspense>
        </div>
      </div>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);