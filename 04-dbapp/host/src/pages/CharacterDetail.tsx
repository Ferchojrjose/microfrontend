import { Error } from "../components";

import CharacterDetail from "mf_charaterDetail/CharacterDetail";

export const CharacterDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Error>
        <CharacterDetail />
      </Error>
    </div>
  )
}

export default CharacterDetailPage;