export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  order: number;
}

export interface TodoFormData {
  text: string;
}
