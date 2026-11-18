
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router";

import { useNote } from "../hooks/useNote";

export default function NoteDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isPending,
    isError,
    error,
    refetch,
  } = useNote(id);

  if (!id) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-center text-red-600">
          Invalid note ID.
        </p>
      </main>
    );
  }

  if (isPending) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-center text-slate-500">
          Loading note...
        </p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
        >
          <h2 className="font-semibold text-red-700">
            Failed to load note
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
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600"
      >
        <ArrowLeft size={18} />
        Back to Notes
      </Link>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h1 className="min-w-0 break-words text-2xl font-bold text-slate-900">
            {note.title}
          </h1>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              disabled
              aria-label="Edit note"
              title="Edit will be available soon"
              className="rounded-lg p-2 text-slate-400 disabled:cursor-not-allowed"
            >
              <Pencil size={20} />
            </button>

            <button
              type="button"
              disabled
              aria-label="Delete note"
              title="Delete will be available soon"
              className="rounded-lg p-2 text-slate-400 disabled:cursor-not-allowed"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
          <span>
            Created: {new Date(note.createdAt).toLocaleDateString()}
          </span>

          <span>
            Updated: {new Date(note.updatedAt).toLocaleDateString()}
          </span>
        </div>

        <div className="my-6 border-t border-slate-200" />

        <p className="whitespace-pre-wrap break-words leading-7 text-slate-700">
          {note.content}
        </p>
      </article>
    </main>
  );
}
