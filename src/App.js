import './App.css';
import { useState, useEffect  } from 'react';
import { Task } from './Task.js'




function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');


  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component Unmounted");
    }
  }, [])



  function handleChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {

    // Now toDoList is an array of object
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false
    };

    setTodoList([...todoList, task]);
  }

  function deleteTask(taskId) {
    // Now we will filter the id (better way when using id)
    setTodoList(todoList.filter(task => task.id !== taskId));
  }


  function completeTask(taskId) {
    setTodoList(
      todoList.map((task) => {
        if (task.id === taskId){
          return {...task, isCompleted: true}
        } else {
          return task;
        }
      })
    );
  }


  return (
    <div className="App">

      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">

        {/* Pass values into componenet include passing functions */}

        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask} isCompleted={task.isCompleted}/>
        })}

      </div>


    </div>
  );
}








export default App;
