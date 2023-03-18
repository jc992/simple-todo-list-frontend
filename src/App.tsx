import TodoProvider from './context/todoContext';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <main className="App">
      </main>
    </TodoProvider>
  );
}

export default App;
