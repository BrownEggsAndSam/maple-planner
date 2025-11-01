import React, { useState } from "react";

export function CharacterForm({ onCreate }) {
  const [name, setName] = useState("");
  const [world, setWorld] = useState("Kronos");
  const [job, setJob] = useState("Night Walker");

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 mb-4">
      <div className="text-sm font-semibold mb-2">Add character</div>
      <div className="flex gap-2 mb-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (Samkage)"
          className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-sm flex-1"
        />
        <input
          value={world}
          onChange={(e) => setWorld(e.target.value)}
          className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-sm w-28"
        />
        <input
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-sm flex-1"
        />
      </div>
      <button
        onClick={() => {
          if (!name.trim()) return;
          const id = (crypto.randomUUID && crypto.randomUUID()) || Math.random().toString(36).slice(2);
          onCreate({
            id,
            name: name.trim(),
            job: job.trim(),
            world: world.trim(),
          });
          setName("");
        }}
        className="bg-amber-400 text-slate-950 text-sm font-semibold px-3 py-1 rounded"
      >
        Save
      </button>
    </div>
  );
}
