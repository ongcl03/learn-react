import './App.css';
import {Planet} from './Planet'




function App() {

  function handleClick() {
    alert('You clicked me');
  }


  return (
    <div className="App"> 

      {/* button onClick  */}
      <button onClick={handleClick}>
        Click me
      </button>


    </div>
  );
}








export default App;
