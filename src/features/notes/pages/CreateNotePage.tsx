
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";

import NoteForm from "../components/NoteForm";
import type { NoteFormValues } from "../components/NoteForm";
import { useCreateNote } from "../hooks/useCreateNote";

export default function CreateNotePage() {
  const navigate = useNavigate();
  const createNoteMutation = useCreateNote();

  async function handleCreateNote(values: NoteFormValues) {
    try {
      await createNoteMutation.mutateAsync(values);

      navigate("/");
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-indigo-600"
      >
        <ArrowLeft size={18} />
        Back to Notes
      </Link>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Create New Note
        </h1>

        <p className="mt-2 mb-8 text-slate-500">
          Start capturing your next great idea.
        </p>

        {createNoteMutation.isError && (
          <div
            role="alert"
            className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            Failed to create note. Please try again.
          </div>
        )}

        <NoteForm
          onSubmit={handleCreateNote}
          isSubmitting={createNoteMutation.isPending}
        />
      </section>
    </main>
  );
}
