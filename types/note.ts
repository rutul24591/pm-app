export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isPinned: boolean;
}

export interface NoteFormData {
  title: string;
  content: string;
}
