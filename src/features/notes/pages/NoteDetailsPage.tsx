
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router";

export default function NoteDetailsPage() {
  const { id } = useParams<{ id: string }>();

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
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-900">
            Note Details
          </h1>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled
              title="Edit will be available soon"
              aria-label="Edit note"
              className="rounded-lg p-2 text-slate-400 disabled:cursor-not-allowed"
            >
              <Pencil size={20} />
            </button>

            <button
              type="button"
              disabled
              title="Delete will be available soon"
              aria-label="Delete note"
              className="rounded-lg p-2 text-slate-400 disabled:cursor-not-allowed"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="my-6 border-t border-slate-200" />

        <h2 className="mb-2 text-sm font-semibold text-slate-700">
          Note ID
        </h2>

        <p className="break-all rounded-lg bg-slate-100 p-4 font-mono text-sm text-slate-600">
          {id}
        </p>

        <div className="mt-6 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-700">
          The note content will appear here after API integration.
        </div>
      </section>
    </main>
  );
}
