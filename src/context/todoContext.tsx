import { createContext, FC } from 'react';
import { TodoContextType, TodoProps } from '../@types/todo';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: FC<TodoProps> = ({ children }) => {
  return (
    <TodoContext.Provider value={{}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
