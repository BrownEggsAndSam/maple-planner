import { useEffect, useState } from "react";

const STORAGE_KEY = "maple_characters";

export function useLocalCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setCharacters(JSON.parse(raw));
  }, []);

  const save = (next) => {
    setCharacters(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const addCharacter = (c) => {
    save([...characters, c]);
  };

  const removeCharacter = (id) => {
    save(characters.filter((c) => c.id !== id));
  };

  return { characters, addCharacter, removeCharacter };
}
