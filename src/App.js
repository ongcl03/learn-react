import './App.css';
import { useState } from 'react';




function App() {

  const [textColor, setTextColor] = useState("black");

  return (
    <div className="App"> 

      {/* toggle textColor with tenary operator */}
      <button onClick={() => {
        setTextColor(textColor === "black" ? "red" : "black");
      }}>
        Change Color
      </button>

      
      {/* using style */}
      <h1 style={{
        color: textColor
      }}>Hi how are you</h1>


    </div>
  );
}








export default App;
