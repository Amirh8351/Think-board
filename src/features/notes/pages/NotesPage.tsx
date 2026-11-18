
import NoteCard from "../components/NoteCard";
import type { Note } from "../types/note.types";

const mockNotes: Note[] = [
  {
    id: "1",
    title: "React Hooks",
    description:
      "Learn useState, useEffect and custom hooks in React.",
    createdAt: "2026-11-12T10:00:00Z",
  },
  {
    id: "2",
    title: "Project Ideas",
    description:
      "Build a modern note-taking application using React and TypeScript.",
    createdAt: "2026-11-11T10:00:00Z",
  },
  {
    id: "3",
    title: "Daily Tasks",
    description:
      "Study TypeScript, practice coding and review React concepts.",
    createdAt: "2026-11-10T10:00:00Z",
  },
  {
    id: "4",
    title: "Books to Read",
    description:
      "Clean Code, Atomic Habits and The Pragmatic Programmer.",
    createdAt: "2026-11-09T10:00:00Z",
  },
];

export default function NotesPage() {
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {mockNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </main>
  );
}
