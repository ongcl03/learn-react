import './App.css';





function App() {

  const users = [
    { name: 'Lucas', age: 21},
    { name: 'John', age: 30},
    { name: 'James', age: 20}
  ]


  return (
    <div className="App"> 

      {/* Loop through users array and pass value into function that creates a componet */}
      {users.map((user, key) => {
        return (
          <User name={user.name} age={user.age}/>
        )
      })}
    

    </div>
  );
}

const User = (props) => {
  return (
    <div> 
      {props.name} {props.age} 
    </div>
  )
}




export default App;
