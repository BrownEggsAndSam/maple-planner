import { Link } from "react-router-dom";

export function CharacterList({ characters, onDelete }) {
  if (!characters.length) return <p className="text-sm text-slate-400">No characters yet.</p>;

  return (
    <div className="grid md:grid-cols-3 gap-3">
      {characters.map((c) => (
        <div key={c.id} className="bg-slate-900 border border-slate-700 rounded-lg p-3">
          <div className="flex justify-between items-start gap-2">
            <div>
              <div className="font-semibold">{c.name}</div>
              <div className="text-xs text-slate-400">{c.world} • {c.job}</div>
            </div>
            <button
              onClick={() => onDelete(c.id)}
              className="text-xs text-red-300 hover:text-red-200"
            >
              delete
            </button>
          </div>
          <div className="mt-3 flex gap-2">
            <Link
              to={`/planner/${c.id}`}
              className="text-xs bg-slate-700 px-2 py-1 rounded"
            >
              Starforce
            </Link>
            <Link
              to={`/progression/${c.id}`}
              className="text-xs bg-slate-700 px-2 py-1 rounded"
            >
              IA / Nodes
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
