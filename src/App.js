import './App.css';





function App() {

  const age = 19;
  const isGreen = false;
  


  return (
    <div className="App"> 

      {/* Using Tenary Operator */}
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      
      {/* Using style */}
      <h1 style={{color: isGreen? "green" : "red"}}> This has color </h1>


      {/* Using logical && for if statement without else branch */}
      {/* If the green is true, show the button, else do nothing, really useful*/}
      {isGreen && <button>This is a button</button>}


    </div>
  );
}

export default App;
