import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { TopBar } from "./components/TopBar.jsx";
import CharactersPage from "./pages/CharactersPage.jsx";
import PlannerPage from "./pages/PlannerPage.jsx";
import ProgressionPage from "./pages/ProgressionPage.jsx";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <TopBar />
        <Routes>
          <Route path="/" element={<Navigate to="/characters" replace />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/planner/:charId" element={<PlannerPage />} />
          <Route path="/progression/:charId" element={<ProgressionPage />} />
          <Route path="*" element={<Navigate to="/characters" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
