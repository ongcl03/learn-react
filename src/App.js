import './App.css';
import { useState } from 'react';




function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {

    // Now toDoList is an array of object
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };

    setTodoList([...todoList, task]);
  }

  function deleteTask(taskId) {
    // Now we will filter the id (better way when using id)
    setTodoList(todoList.filter(task => task.id !== taskId));
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
            <div className='task-container'>
              <h1 className='task'>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}> X </button>
            </div>
          ) 
        })}

      </div>


    </div>
  );
}








export default App;
