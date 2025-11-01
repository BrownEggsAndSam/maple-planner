import { useParams } from "react-router-dom";
import { useLocalCharacters } from "../hooks/useLocalCharacters.js";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { slot: "Weapon", level: 150, currentSF: 12, targetSF: 17 },
  { slot: "Secondary", level: 150, currentSF: 10, targetSF: 15 },
  { slot: "Emblem", level: 150, currentSF: 10, targetSF: 15 },
  { slot: "Top", level: 150, currentSF: 12, targetSF: 15 },
];

function estimateCost(level, from, to) {
  const base = level * 100000;
  return (to - from) * base;
}

export default function PlannerPage() {
  const { charId } = useParams();
  const { characters } = useLocalCharacters();
  const character = characters.find((c) => c.id === charId);

  const [items, setItems] = useState(
    DEFAULT_ITEMS.map((it) => ({
      ...it,
      estimatedCost: estimateCost(it.level, it.currentSF, it.targetSF),
    }))
  );

  const total = items.reduce((sum, it) => sum + (it.estimatedCost ?? 0), 0);

  return (
    <div className="p-4 space-y-4">
      <div className="text-sm text-slate-400">
        {character ? (
          <>Starforce Plan for <span className="text-amber-200">{character.name}</span></>
        ) : (
          "Character not found"
        )}
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
        <div className="text-xs text-slate-400 mb-2">Total estimated cost</div>
        <div className="text-2xl font-bold text-amber-200">
          {total.toLocaleString()} meso
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {items.map((it, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg p-3 space-y-2">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{it.slot}</div>
              <div className="text-xs text-slate-400">Lv {it.level}</div>
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-xs text-slate-400">Current</label>
              <input
                type="number"
                value={it.currentSF}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  const next = [...items];
                  next[idx] = {
                    ...it,
                    currentSF: v,
                    estimatedCost: estimateCost(it.level, v, it.targetSF),
                  };
                  setItems(next);
                }}
                className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-sm w-20"
              />
              <label className="text-xs text-slate-400">Target</label>
              <input
                type="number"
                value={it.targetSF}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  const next = [...items];
                  next[idx] = {
                    ...it,
                    targetSF: v,
                    estimatedCost: estimateCost(it.level, it.currentSF, v),
                  };
                  setItems(next);
                }}
                className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-sm w-20"
              />
            </div>
            <div className="text-xs text-slate-400">
              Est. cost: <span className="text-amber-200">{it.estimatedCost?.toLocaleString()} meso</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
