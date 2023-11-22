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



    </div>
  );
}

export default App;
