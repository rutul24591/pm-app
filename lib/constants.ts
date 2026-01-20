import { TaskStatus, TaskPriority } from '@/types';

export const STORAGE_KEYS = {
  TASKS: 'vibe-pm-tasks',
  TODOS: 'vibe-pm-todos',
  NOTES: 'vibe-pm-notes',
} as const;

export const KANBAN_COLUMNS: { id: TaskStatus; title: string; color: string }[] = [
  { id: 'todo', title: 'Todo', color: 'bg-slate-400' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-500' },
  { id: 'complete', title: 'Complete', color: 'bg-emerald-500' },
  { id: 'blocked', title: 'Blocked', color: 'bg-red-500' },
];

export const PRIORITY_CONFIG: Record<TaskPriority, { label: string; color: string }> = {
  low: { label: 'Low', color: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300' },
  medium: { label: 'Medium', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' },
  high: { label: 'High', color: 'bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300' },
  urgent: { label: 'Urgent', color: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' },
};
