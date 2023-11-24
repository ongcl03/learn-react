import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';




function App() {

  const [excuse, setExcuse] = useState('');

  const createExecuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
      .then(res => setExcuse(res.data[0].excuse))
  }


  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => createExecuse('party')}>Party</button>
      <button onClick={() => createExecuse('family')}>Family</button>
      <button onClick={() => createExecuse('office')}>Office</button>


      <p>{excuse}</p>
    </div>
  );
}








export default App;
