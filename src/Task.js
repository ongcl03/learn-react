export const Task = (props) => {

  return (
    <div 
      className='task-container' 
      style={{backgroundColor : props.isCompleted ? "green": "white"}}
    >
      <h1 className='task'>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  ); 
};