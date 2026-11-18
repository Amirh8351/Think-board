export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface NotesResponse {
  success: boolean;
  response: Note[];
  status: number;
}

export type CreateNoteInput = {
  title: string;
  content: string;
};
