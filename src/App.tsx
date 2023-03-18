import TodoProvider from './context/todoContext';
import Background from './containers/Background';
import Todos from './containers/Todos';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <main className="App">
        <Background />
        <TodoForm />
        <Todos />
      </main>
    </TodoProvider>
  );
}

export default App;
