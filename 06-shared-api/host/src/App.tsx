import ReactDOM from "react-dom/client";

import "./index.css";

import Swal from "sweetalert2";

import Header from "remote/Header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">

    <Header />
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={() => Swal.fire({
      title: "Hello World",
      text: "This is a test",
      icon: "success",
      confirmButtonText: "OK",
    })}>Click me</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);