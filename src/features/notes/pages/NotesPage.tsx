
import NoteCard from "../components/NoteCard";
import { useNotes } from "../hooks/useNotes";

export default function NotesPage() {
  const {
    data: notes,
    isPending,
    isError,
    error,
    refetch,
  } = useNotes();

  if (isPending) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-slate-500">
          Loading notes...
        </p>
      </main>
    );
  }

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
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          My Notes
        </h2>

        <p className="mt-2 text-slate-500">
          Capture your ideas, one note at a time.
        </p>
      </div>

      {notes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h3 className="text-lg font-semibold text-slate-800">
            No notes yet!
          </h3>

          <p className="mt-2 text-slate-500">
            Create your first note to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </main>
  );
}
