import { useState } from 'react';
import './App.css';

function App() {
  let [todos, setTodos] = useState([]);

  let saveToDoList = (e) => {
    e.preventDefault();

    let todoName = e.target.todoName.value;
    if (!todos.includes(todoName)) {
      setTodos([...todos, todoName]);
      alert(`Task saved: ${todoName}`);
    } else {
      alert(`Task already exists: ${todoName}`);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name='todoName' placeholder="Add a new task" />
          <button>Save</button>
        </form>
      </header>
    </div>
  );
}

export default App;
