import { CharacterForm } from "../components/CharacterForm.jsx";
import { CharacterList } from "../components/CharacterList.jsx";
import { useLocalCharacters } from "../hooks/useLocalCharacters.js";

export default function CharactersPage() {
  const { characters, addCharacter, removeCharacter } = useLocalCharacters();

  return (
    <div className="p-4">
      <CharacterForm onCreate={addCharacter} />
      <CharacterList characters={characters} onDelete={removeCharacter} />
    </div>
  );
}
