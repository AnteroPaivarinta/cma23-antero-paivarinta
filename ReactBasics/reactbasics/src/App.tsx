import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings';
import r2d2 from './r2d2.jpg';
import Planets from './Planets';

function App() {
  const name ='Antero Päivärinta';
  const age = 23;
  const planetList = [
    { name: "Hoth", climate: "Ice" },
    { name: "Tattooine", climate: "Desert" },
    { name: "Alderaan", climate: "Temperate" },
    { name: "Mustafar", climate: "Volcanic", }
  ];



  return (
    <div className="App">
      <Greeting name={name} age={age}/>
      <img src={r2d2}></img>
      <Planets planetList={planetList} />

    </div>
  );
}

export default App;
