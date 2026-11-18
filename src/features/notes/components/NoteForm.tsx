
import { useState, type FormEvent } from "react";

export interface NoteFormValues {
  title: string;
  content: string;
}

interface NoteFormProps {
  initialValues?: NoteFormValues;
  onSubmit: (values: NoteFormValues) => void | Promise<void>;
  submitLabel?: string;
  isSubmitting?: boolean;
}

export default function NoteForm({
  initialValues,
  onSubmit,
  submitLabel = "Save Note",
  isSubmitting = false,
}: NoteFormProps) {
  const [title, setTitle] = useState(initialValues?.title ?? "");
  const [content, setContent] = useState(initialValues?.content ?? "");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    setError("");

    await onSubmit({
      title: title.trim(),
      content: content.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
        >
          {error}
        </p>
      )}

      <div>
        <label
          htmlFor="note-title"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Title
        </label>

        <input
          id="note-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter note title..."
          disabled={isSubmitting}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="note-content"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Content
        </label>

        <textarea
          id="note-content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Write your thoughts here..."
          rows={7}
          disabled={isSubmitting}
          className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:opacity-60"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
