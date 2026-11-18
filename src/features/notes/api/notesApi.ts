
import { apiClient } from "../../../lib/axios";
import type { Note, NotesResponse } from "../types/note.types";

export async function getNotes(): Promise<Note[]> {
  const { data } = await apiClient.get<NotesResponse>("/api/notes");

  if (!data.success) {
    throw new Error("Failed to fetch notes");
  }

  return data.response;
}
