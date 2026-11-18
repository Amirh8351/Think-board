
import { useState } from "react";
import { Search } from "lucide-react";

import NoteCard from "../components/NoteCard";
import { useNotes } from "../hooks/useNotes";

export default function NotesPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const {
    data: notes,
    isPending,
    isError,
    error,
    refetch,
  } = useNotes();

  // Filter notes by title or content
  const filteredNotes = (notes ?? []).filter((note) => {
    const searchText = search.trim().toLowerCase();

    return (
      note.title.toLowerCase().includes(searchText) ||
      note.content.toLowerCase().includes(searchText)
    );
  });

  // Sort filtered notes
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortBy === "newest") {
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    }

    if (sortBy === "oldest") {
      return (
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime()
      );
    }

    if (sortBy === "updated") {
      return (
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
      );
    }

    return 0;
  });

  // Loading state
  if (isPending) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-slate-500">
          Loading notes...
        </p>
      </main>
    );
  }

  // Error state
  if (isError) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
        >
          <h2 className="text-xl font-semibold text-red-700">
            Failed to load notes
          </h2>

          <p className="mt-2 text-sm text-red-600">
            {error.message}
          </p>

          <button
            type="button"
            onClick={() => void refetch()}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          My Notes
        </h2>

        <p className="mt-2 text-slate-500">
          Capture your ideas, one note at a time.
        </p>
      </div>

      {/* Search and Sort */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        {/* Search */}
        <div className="w-full sm:max-w-md">
          <label
            htmlFor="search-notes"
            className="sr-only"
          >
            Search notes
          </label>

          <div className="relative">
            <Search
              size={20}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="search-notes"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search notes..."
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <p className="mt-2 text-sm text-slate-500">
            {filteredNotes.length} notes found
          </p>
        </div>

        {/* Sort */}
        <div className="w-full sm:w-52">
          <label
            htmlFor="sort-notes"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Sort By
          </label>

          <select
            id="sort-notes"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="newest">
              Newest First
            </option>

            <option value="oldest">
              Oldest First
            </option>

            <option value="updated">
              Recently Updated
            </option>
          </select>
        </div>
      </div>

      {/* Notes List */}
      {notes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h3 className="text-lg font-semibold text-slate-800">
            No notes yet!
          </h3>

          <p className="mt-2 text-slate-500">
            Create your first note to get started.
          </p>
        </div>
      ) : sortedNotes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h3 className="text-lg font-semibold text-slate-800">
            No matching notes found
          </h3>

          <p className="mt-2 text-slate-500">
            Try searching for something else.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
            />
          ))}
        </div>
      )}
    </main>
  );
}
