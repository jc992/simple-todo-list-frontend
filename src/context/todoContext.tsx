import React, { createContext, FC } from 'react';
import { TodoContextType, ITodo, TodoProps } from '../@types/todo';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: FC<TodoProps> = ({ children }) => {
  const [localState, setLocalState] = useLocalStorage('todos');
  const [todos, setTodos] = React.useState<ITodo[]>(
    localState ?? [
      {
        id: crypto.randomUUID(),
        description: 'Learn Javascript',
        timestamp: new Date().getTime(),
        isComplete: false,
      },
    ],
  );

  const saveState = (args: ITodo[]): void => {
    setTodos(args);
    setLocalState(args);
  };

  const saveTodo = (todo: ITodo): void => {
    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      description: todo.description,
      timestamp: new Date().getTime(),
      isComplete: false,
    };
    saveState([...todos, newTodo]);
  };

  const updateTodo = (id: string): void => {
    // TODO refactor this function;
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        saveState([...todos]);
      }
    });
  };

  const deleteTodo = (id: string): void => {
    const item = todos.find((t) => t.id === id) as ITodo;
    if (!item) {
      return;
    }
    todos.splice(todos.indexOf(item), 1);
    saveState([...todos]);
  };

  const editTodo = (id: string, description: string): void => {
    // TODO refactor this function;
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.description = description;
        saveState([...todos]);
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
