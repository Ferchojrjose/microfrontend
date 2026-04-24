

import { Error, Loader } from "../components";
import Counter from "mf_counter/Counter";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <h1 className="text-4xl font-extrabold text-center text-slate-800 tracking-tight mt-10 mb-6">
        Contador
      </h1>
      <Error>
        <Counter />
      </Error>
    </div>
  )
}

export default HomePage;