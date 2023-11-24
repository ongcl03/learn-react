import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';




function App() {

  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
    .then(res => setCatFact(res.data.fact))
    .catch(e => console.log(e))
  }

  // fetch data in useEffect when mount (so only fetch once when mount)
  useEffect(() => {
    fetchCatFact();
  }, []);


  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact </button>
      <p>{catFact}</p>
    </div>
  );
}








export default App;
