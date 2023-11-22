import './App.css';

function App() {

  return (
    <div className="App"> 
      {/* This is a JSX comment */}
      {/* So using props we can pass in different data for creating same compoenent but with different value/data */}
      <User name="cl" age={20} email="cl@gmail.com" />
      <User name="second" age={21} email="second@gmail.com" />
    </div>
  );
}

// component
// props is like data we can pass in into this components
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
}


export default App;
