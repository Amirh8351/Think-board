import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";

import { deleteNote } from "../api/notesApi";
import { useNote } from "../hooks/useNote";

export default function NoteDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const { data: note, isPending, isError, error, refetch } = useNote(id);

  async function handleDelete() {
    if (!id || isDeleting) return;

    setIsDeleting(true);
    setDeleteError("");

    try {
      await deleteNote(id);

      await queryClient.invalidateQueries({
        queryKey: ["notes"],
        exact: true,
      });

      queryClient.removeQueries({
        queryKey: ["notes", id],
        exact: true,
      });

      navigate("/");
    } catch (error) {
      console.error("Failed to delete note:", error);
      setDeleteError("Failed to delete note. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  }

  if (!id) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-center text-red-600">Invalid note ID.</p>
      </main>
    );
  }

  if (isPending) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-center text-slate-500">Loading note...</p>
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
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600"
      >
        <ArrowLeft size={18} />
        Back to Notes
      </Link>

      {deleteError && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {deleteError}
        </div>
      )}

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h1 className="min-w-0 break-words text-2xl font-bold text-slate-900">
            {note.title}
          </h1>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to={`/notes/${note.id}/edit`}
              aria-label="Edit note"
              title="Edit note"
              className="rounded-lg p-2 text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              <Pencil size={20} />
            </Link>

            <button
              type="button"
              onClick={() => void handleDelete()}
              disabled={isDeleting}
              aria-label="Delete note"
              title="Delete note"
              className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
          <span>Created: {new Date(note.createdAt).toLocaleDateString()}</span>

          <span>Updated: {new Date(note.updatedAt).toLocaleDateString()}</span>
        </div>

        <div className="my-6 border-t border-slate-200" />

        <p className="whitespace-pre-wrap break-words leading-7 text-slate-700">
          {note.content}
        </p>
      </article>
    </main>
  );
}
