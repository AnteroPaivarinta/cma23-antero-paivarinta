import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import './index.css';
function App() {
  const [text, setText ] = useState('');
  const [object, setObject ] = useState(new Array(25).fill(false))
  const handleClick = () => {
    setText('Moimoii')
  }

  const change = (index:number) => {
    const ar  = [...object];
    ar[index] = !ar[index];
    setObject(ar);
  }

  const names = [
    "Anakin Skywa",
    "Leia Organa",
    "Han Solo",
    "C-3PO",
    "R2-D2",
    "Darth Vader",
    "Obi-Wan Kenobi",
    "Yoda",
    "Palpatine",
    "Boba Fett",
    "Lando Calrissian",
    "Jabba the Hutt",
    "Mace Windu",
    "Padmé Amidala",
    "Count Dooku",
    "Qui-Gon Jinn",
    "Aayla Secura",
    "Ahsoka Tano",
    "Ki-Adi-Mundi",
    "Luminara Unduli",
    "Plo Koon",
    "Kit Fisto",
    "Shmi Skywalker",
    "Beru Whitesun",
    "Owen Lars"
  ];
  const array = names.map((value, index) => <button style={{backgroundColor: object[index] === true? 'yellow' : 'green'}} onClick={() =>  change(index)}  className="grid-item">{value}</button>) 
  useEffect(() => {    
      console.log(object)
   });
  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <button onClick={() => handleClick()}>Toggle Text</button>
      {text && <div>{text}</div>}

      <h1>Assignment 2</h1>
      <Buttons />

      <h1>Assignment 3</h1>
      <hr></hr>
      <div className='grid-container'>
          {array}
      </div>
    </div>
  );
}

export default App;
