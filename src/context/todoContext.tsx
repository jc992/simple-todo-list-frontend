import React, { createContext, FC, ReactNode } from 'react';
import { TodoContextType, ITodo, TodoProps } from '../@types/todo';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: FC<TodoProps> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: crypto.randomUUID(),
      description: 'Learn Javascript',
      timestamp: new Date().getTime(),
      isComplete: false,
    },
  ]);

  const saveTodo = (todo: ITodo): void => {
    // TODO implement
  };

  const updateTodo = (id: string): void => {
    // TODO implement
  };

  const deleteTodo = (id: string): void => {
    // TODO implement
  };

  const editTodo = (id: string, description: string): void => {
    // TODO implement
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
