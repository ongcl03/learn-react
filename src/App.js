import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  // Using custom hook (they are independent to each other)
  const [isVisible, toogle] = useToggle();
  const [isVisible2, toogle2] = useToggle();

  return (
    <div className="App">
      <button onClick={toogle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden text</h1>}
      <button onClick={toogle}>{isVisible2 ? "Hide" : "Show"}</button>
      {isVisible2 && <h1>Hidden text</h1>}
    </div>
  );
}

export default App;
