import { Link, useLocation } from "react-router-dom";

export function TopBar() {
  const loc = useLocation();
  const isActive = (p) => loc.pathname === p;

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-700">
      <div className="font-bold tracking-tight">Maple Planner</div>
      <div className="flex gap-3 text-sm">
        <Link className={isActive("/characters") ? "text-amber-300" : ""} to="/characters">
          Characters
        </Link>
        <Link className={isActive("/progression") ? "text-amber-300" : ""} to="/progression">
          Progression
        </Link>
      </div>
    </div>
  );
}
