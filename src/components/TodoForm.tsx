import React, { FC, FormEvent } from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../@types/todo';

const TodoForm: FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: FormEvent<HTMLInputElement>): void => {
    // TODO fix bug with empty input
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <form className="form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div className="input-container">
        <div className="input-inner-wrapper">
          <input
            placeholder="  Write new task here..."
            onChange={handleForm}
            type="text"
            id="description"
            className="input-box"
          />
        </div>
      </div>
      <div className="button-container">
        <button disabled={formData === undefined ? true : false}>Create</button>
      </div>
    </form>
  );
};

export default TodoForm;
