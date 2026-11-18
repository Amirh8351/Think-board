
import { NotebookPen, Plus } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-600 p-2 text-white">
            <NotebookPen size={24} />
          </div>

          <span className="text-xl font-bold text-slate-900">
            Think Board
          </span>
        </Link>

        <Link
          to="/notes/new"
          aria-label="Create new note"
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          <Plus size={20} />
          <span className="hidden sm:inline">
            New Note
          </span>
        </Link>
      </nav>
    </header>
  );
}
