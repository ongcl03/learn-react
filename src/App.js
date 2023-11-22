import './App.css';





function App() {

  const age = 19;
  


  return (
    <div className="App"> 
      {/** Using Tenary Operator */}
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    </div>
  );
}

export default App;
