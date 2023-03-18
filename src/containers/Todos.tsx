import { FC, useState, useContext } from 'react';
import { TodoContextType, ITodo, SortBy } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import TodoItem from '../components/TodoItem';
import Divider from '../components/Divider';

const Todos: FC = () => {
  const [sortBy, setSortBy] = useState<SortBy>('asc');
  const [isFilterActive, setFilterActive] = useState(false);
  const { todos, updateTodo, deleteTodo, editTodo } = useContext(TodoContext) as TodoContextType;

  const handleSort = () => {
    switch (sortBy) {
      case 'asc':
        todos.sort((a, b) => (a.description > b.description ? 1 : -1));
        setSortBy('desc');
        break;
      case 'desc':
        todos.sort((a, b) => (a.description < b.description ? 1 : -1));
        setSortBy('timestamp');
        break;
      case 'timestamp':
        todos.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
        setSortBy('asc');
        break;
    }
  };

  return (
    <>
      <h1 className="sort" onClick={() => handleSort()}>Todos</h1>
      <Divider />
      {todos
        .filter((t: ITodo) => (isFilterActive ? !t.isComplete : t))
        .map((t: ITodo) => (
          <TodoItem key={t.id} editTodo={editTodo} updateTodo={updateTodo} todo={t} deleteTodo={deleteTodo} />
        ))}
      <div className="hide-wrapper">
        <h1>Hide Completed</h1>
        <div className="hide-checkbox-container">
          <input className="hide-checkbox" type="checkbox" onChange={(e) => setFilterActive(e.target.checked)} />
        </div>
      </div>
    </>
  );
};

export default Todos;
