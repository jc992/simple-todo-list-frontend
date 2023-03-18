import { FC, useState } from 'react';
import { TodoItemProps } from '../@types/todo';
import './TodoItem.styles.css';

const TodoItem: FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo, editTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [description, setDescription] = useState('');

  const toggleEdit = () => {
    setDescription(todo.description);
    setEditing(true);
  };

  const handleEdit = () => {
    editTodo(todo.id, description);
    setEditing(false);
  };

  return (
    <div className="item-container">
      <div className="inner-wrapper">
        {!isEditing ? (
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => updateTodo(todo.id)}
            />
          </div>
        ) : null}
        <div className="text-container">
          {isEditing ? (
            <div className="input-inner-wrapper">
              <input
                className="edit-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
          ) : (
            <h1>{todo.description}</h1>
          )}
        </div>
      </div>
      <div className="inner-wrapper">
        <div className="button-container">
          {!isEditing ? (
            <button onClick={() => toggleEdit()}>Edit</button>
          ) : (
            <button onClick={() => handleEdit()}>Change</button>
          )}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
