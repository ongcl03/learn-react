import './App.css';
import { useState } from 'react';




function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    // Using spread operator instead of push, cuz must be pure
    setTodoList([...todoList, newTask]);
  }

  function deleteTask(taskName) {
    // Using filter to filter out the task
    setTodoList(todoList.filter(task => task !== taskName));
  }


  return (
    <div className="App">

      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>



      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}> X </button>
            </div>
          ) 
        })}

      </div>


    </div>
  );
}








export default App;
