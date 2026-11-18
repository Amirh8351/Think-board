
import { ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router";

export default function CreateNotePage() {
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

        <p className="mt-2 text-slate-500">
          Start capturing your next great idea.
        </p>

        <div className="mt-8 rounded-xl bg-indigo-50 p-5">
          <div className="flex items-center gap-2 text-indigo-700">
            <Info size={20} />
            <h2 className="font-semibold">
              Form coming soon
            </h2>
          </div>

          <p className="mt-2 text-sm text-indigo-600">
            The note creation form will be added in the next step.
          </p>
        </div>
      </section>
    </main>
  );
}
