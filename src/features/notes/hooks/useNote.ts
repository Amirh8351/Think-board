
import { useQuery } from "@tanstack/react-query";
import { getNoteById } from "../api/notesApi";

export function useNote(id: string | undefined) {
  return useQuery({
    queryKey: ["notes", id],
    queryFn: () => getNoteById(id!),
    enabled: Boolean(id),
  });
}
