
import { apiClient } from "../../../lib/axios";

import type {
  Note,
  NotesResponse,
  CreateNoteInput,
  SingleNoteResponse,
  UpdateNoteInput,
} from "../types/note.types";

export async function getNotes(): Promise<Note[]> {
  const { data } = await apiClient.get<NotesResponse>("/api/notes");

  if (!data.success) {
    throw new Error("Failed to fetch notes");
  }

  return data.response;
}

export async function createNote(
  input: CreateNoteInput
): Promise<void> {
  await apiClient.post("/api/notes", input);
}


export async function getNoteById(id: string): Promise<Note> {
  const { data } = await apiClient.get<SingleNoteResponse>(
    `/api/notes/${encodeURIComponent(id)}`
  );

  if (!data.success) {
    throw new Error("Failed to fetch note");
  }

  return data.response;
}


export async function updateNote(
  input: UpdateNoteInput
): Promise<void> {
  const { id, title, content } = input;

  await apiClient.put(
    `/api/notes/${encodeURIComponent(id)}`,
    {
      title,
      content,
    }
  );
}
