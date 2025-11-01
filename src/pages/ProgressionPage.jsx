import { useParams } from "react-router-dom";
import { useLocalCharacters } from "../hooks/useLocalCharacters.js";

export default function ProgressionPage() {
  const { charId } = useParams();
  const { characters } = useLocalCharacters();
  const character = characters.find((c) => c.id === charId);

  return (
    <div className="p-4 space-y-3">
      <div className="text-sm text-slate-400">
        {character ? <>Progression for <span className="text-amber-200">{character.name}</span></> : "Pick a character"}
      </div>
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
        <div className="text-sm font-semibold mb-2">Inner Ability</div>
        <p className="text-xs text-slate-400">Track IA rank, lines, and honor here.</p>
      </div>
    </div>
  );
}
