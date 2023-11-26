import "./App.css";
import { useCounter } from "./useCounter";

function App() {
  const [count, increaseCounter, decreaseCounter, resetCounter] = useCounter();

  return (
    <div className="App">
      {count}
      <button onClick={increaseCounter}>increase</button>
      <button onClick={decreaseCounter}>decrease</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
}

export default App;
