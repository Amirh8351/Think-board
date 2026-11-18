import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../api/notesApi";

export function useNotes() {
  return useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
}
