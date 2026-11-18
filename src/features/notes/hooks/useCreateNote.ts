
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../api/notesApi";

export function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });
}
