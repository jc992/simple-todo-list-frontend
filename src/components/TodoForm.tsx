import { FC } from 'react';

const TodoForm: FC = () => {
  return (
    <form className="form">
      <div className="input-container">
        <div className="input-inner-wrapper">
          <input
            placeholder="  Write new task here..."
            type="text"
            id="description"
            className="input-box"
          />
        </div>
      </div>
      <div className="button-container">
        <button>Create</button>
      </div>
    </form>
  );
};

export default TodoForm;
