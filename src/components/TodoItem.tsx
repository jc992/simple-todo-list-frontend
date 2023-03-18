import { FC } from 'react';
import { TodoItemProps } from '../@types/todo';

const TodoItem: FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo, editTodo }) => {
  return (
    <div className="item-container">
      <div className="inner-wrapper">
        <div className="checkbox-container">
          <input className="checkbox" type="checkbox"/>
        </div>
        <div className="text-container">
          <h1>{todo.description}</h1>
        </div>
      </div>
      <div className="inner-wrapper">
        <div className="button-container">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
