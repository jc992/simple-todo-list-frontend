import { ReactNode } from 'react';

export interface ITodo {
  id: string;
  description: string;
  timestamp: number;
  isComplete: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, description: string) => void;
};

export type TodoProps = {
  children: ReactNode;
}

export type TodoItemProps = {
  todo: ITodo;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, description: string) => void;
}

export type SortBy = 'asc' | 'desc' | 'timestamp';