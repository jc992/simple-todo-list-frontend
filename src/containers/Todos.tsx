import { FC, useContext } from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import TodoItem from '../components/TodoItem';
import Divider from '../components/Divider';

const Todos: FC = () => {
  const { todos, updateTodo, deleteTodo, editTodo } = useContext(TodoContext) as TodoContextType;
  return (
    <>
      <h1 className="sort">Todos</h1>
      <Divider />
      {todos
        .map((t: ITodo) => (
          <TodoItem key={t.id} editTodo={editTodo} updateTodo={updateTodo} todo={t} deleteTodo={deleteTodo} />
        ))}
      <div className="hide-wrapper">
        <h1>Hide Completed</h1>
        <div className="hide-checkbox-container">
          <input className="hide-checkbox" type="checkbox"/>
        </div>
      </div>
    </>
  );
};

export default Todos;
