import { FC, useState } from 'react';
import { TodoItemProps } from '../@types/todo';

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
    <div className="item-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="inner-wrapper">
        <div className="checkbox-container">
          {!isEditing ? (
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => updateTodo(todo.id)}
            />
          ) : null}
        </div>
        <div className="text-container">
          {isEditing ? (
            <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
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
