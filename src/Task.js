export const Task = (props) => {
  return (
    <div className='task-container'>
      <h1 className='task'>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  ); 
};