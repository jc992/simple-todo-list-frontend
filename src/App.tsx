import TodoProvider from './context/todoContext';
import Todos from './containers/Todos';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <main className="App">
        <TodoForm />
        <Todos />
      </main>
    </TodoProvider>
  );
}

export default App;
