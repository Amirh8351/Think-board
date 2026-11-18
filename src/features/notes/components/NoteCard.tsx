import { Pencil, Trash2 } from "lucide-react";

import type { Note } from "../types/note.types";

import { Link } from "react-router";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 h-1 w-10 rounded-full bg-indigo-500" />

      <h2 className="mb-2 line-clamp-1 break-all text-lg font-semibold text-slate-900">
        <Link
          to={`/notes/${note.id}`}
          className="transition-colors hover:text-indigo-600"
        >
          {note.title}
        </Link>
      </h2>

      <p className="mb-6 line-clamp-3 flex-1 whitespace-pre-line break-words text-sm leading-6 text-slate-600">
        {note.content}
      </p>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-400">
          {new Date(note.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          })}
        </span>

        <div className="flex items-center gap-2">
          <Link
            to={`/notes/${note.id}/edit`}
            aria-label={`Edit ${note.title}`}
            title="Edit note"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Pencil size={18} />
          </Link>   

          <button
            type="button"
            aria-label={`Delete ${note.title}`}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
