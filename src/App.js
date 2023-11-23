import './App.css';
import { useState } from 'react';




function App() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const setToZero = () => {
    setCount(0);
  }



  return (
    <div className="App"> 

      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setToZero}>Set to zero</button>

      {count}



    </div>
  );
}








export default App;
