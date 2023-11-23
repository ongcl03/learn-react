import './App.css';
import { useState } from 'react';




function App() {

  const [showText, setShowText] = useState(true);

  return (
    <div className="App"> 
      <button onClick={() => setShowText(!showText)}>
        Show/Hide
      </button>

      {/* if showText = true, show the how are you text */}
      {showText && <h1>Hi how are you</h1>}


    </div>
  );
}








export default App;
