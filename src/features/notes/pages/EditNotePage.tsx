
import { ArrowLeft, Pencil } from "lucide-react";
import { Link, useParams } from "react-router";

export default function EditNotePage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-center text-red-600">
          Invalid note ID.
        </p>
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
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
            <Pencil size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Edit Note
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Update your note information.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
          <p className="font-medium text-indigo-700">
            Edit form coming soon
          </p>

          <p className="mt-2 text-sm text-indigo-600">
            The note editing form will be added in the next step.
          </p>
        </div>
      </section>
    </main>
  );
}
