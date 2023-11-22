import './App.css';





function App() {

  const names = ['Ali', 'Sam', 'John', 'Lucas'];


  return (
    <div className="App"> 

      {/* Using array.map to loop through array */}
      {names.map((name, key) => {
        return <h1 key={key}> {name} </h1>;
      })}
    

    </div>
  );
}

export default App;
