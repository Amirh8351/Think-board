import { Route, Routes } from "react-router";

import NotesPage from "../features/notes/pages/NotesPage";
import CreateNotePage from "../features/notes/pages/CreateNotePage";
import NoteDetailsPage from "../features/notes/pages/NoteDetailsPage";

import EditNotePage from "../features/notes/pages/EditNotePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />

      <Route path="/notes/new" element={<CreateNotePage />} />

      <Route path="/notes/:id/edit" element={<EditNotePage />} />

      <Route path="/notes/:id" element={<NoteDetailsPage />} />

      <Route
        path="*"
        element={
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              404 - Page Not Found
            </h1>

            <p className="mt-3 text-slate-500">
              The page you are looking for does not exist.
            </p>
          </div>
        }
      />
    </Routes>
  );
}
