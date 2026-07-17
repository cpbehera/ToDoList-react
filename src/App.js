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

  let list = todos.map((value,index) =>{
    return <ToDoListItems key={index} todoName={value}
     indexNumber={index} todos={todos} setTodos={setTodos} />
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name='todoName' placeholder="Add a new task" />
          <button>Save</button>
        </form>

        <div className="outerDiv">
        <ul>
          {list}
        </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

function ToDoListItems({ todoName, indexNumber, todos, setTodos }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () =>{
    let finalData = todos.filter((value, index) => index !== indexNumber);
    setTodos(finalData);
  }

  let checkStatus = () =>{
    setStatus(!status);
  }
  return (
    <li className={status ? 'completetodo' : ''} onClick={checkStatus}>
      {todoName} <span onClick={deleteRow}>&times;</span>
    </li>
  )
}
