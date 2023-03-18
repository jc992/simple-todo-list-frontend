import React, { createContext, FC } from 'react';
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
    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      description: todo.description,
      timestamp: new Date().getTime(),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: string): void => {
    // TODO refactor this function;
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        setTodos([...todos]);
      }
    });
  };

  const deleteTodo = (id: string): void => {
    const item = todos.find((t) => t.id === id) as ITodo;
    if (!item) {
      return;
    }
    todos.splice(todos.indexOf(item), 1);
    setTodos([...todos]);
  };

  const editTodo = (id: string, description: string): void => {
    // TODO refactor this function;
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.description = description;
        setTodos([...todos]);
      }
    });
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
