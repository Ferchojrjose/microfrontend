import { Error } from "../components";
import LayoutCard from "mf_character/LayoutCard";

export const Characters = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <h1 className="text-4xl font-extrabold text-center text-slate-800 tracking-tight mt-10 mb-6">
        Personajes Dragon Ball API
      </h1>

      <Error>
        <LayoutCard />
      </Error>
    </div>
  )
}

export default Characters;