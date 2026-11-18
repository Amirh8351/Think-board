import { ArrowLeft, Pencil } from "lucide-react";
import { Link, useParams } from "react-router";

import NoteForm from "../components/NoteForm";
import type { NoteFormValues } from "../components/NoteForm";
import { useNote } from "../hooks/useNote";

export default function EditNotePage() {
  const { id } = useParams<{ id: string }>();

  const { data: note, isPending, isError, error, refetch } = useNote(id);

  function handleEditNote(values: NoteFormValues) {
    // Temporary handler. No PUT request is sent.
    console.log("Updated note values:", values);
  }

  if (!id) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-center text-red-600">Invalid note ID.</p>
      </main>
    );
  }

  if (isPending) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-center text-slate-500">Loading note...</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
        >
          <h2 className="font-semibold text-red-700">Failed to load note</h2>

          <p className="mt-2 text-sm text-red-600">{error.message}</p>

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
        to={`/notes/${id}`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-indigo-600"
      >
        <ArrowLeft size={18} />
        Back to Note
      </Link>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
            <Pencil size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">Edit Note</h1>

            <p className="mt-1 text-sm text-slate-500">
              Update your note information.
            </p>
          </div>
        </div>

        <NoteForm
          key={note.id}
          initialValues={{
            title: note.title,
            content: note.content,
          }}
          onSubmit={handleEditNote}
          submitLabel="Update Note"
        />
      </section>
    </main>
  );
}
