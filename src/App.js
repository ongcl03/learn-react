import './App.css';
import { useState } from 'react';




function App() {

  // useState
  const [age, setAge] = useState(0);      // 0 is initial state, can pass in any value / pure function

  function increaseAge() {
    setAge(age + 1)           // setAge will set the age, it can pass in any value/function
  }


  return (
    <div className="App"> 

      {age}

      <button onClick={increaseAge}> 
        Increase Age 
      </button>


    </div>
  );
}








export default App;
