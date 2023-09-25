import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const defaultTodos = [
    {id: 1, text: 'Buy potatoes', complete: false},
    {id: 2, text: 'Make food', complete: false},
    {id: 3, text: 'Exercise', complete: false},
    {id: 4, text: 'Do the dishes', complete: false},
    {id: 5, text: 'Floss the teeth', complete: false},
    {id: 6, text: 'Play videogames', complete: true},
  ]
  const [arrayData, setArrayData ] = useState(defaultTodos.map((value) =>  ({...value, remove: false })));

  const remove = (value) => {
    const copy = [...arrayData];
    let bool = copy[value].remove
    copy[value] = {...copy[value], remove: !bool};
    setArrayData(copy);
  }
  
  useEffect(() => {
    console.log('array', arrayData)
  }, [arrayData]);
 

  const array = arrayData.map((value, index) => <div key={value.id} style={{backgroundColor: 'purple', width: "30%", height: "100px", margin: 10, display: 'flex', flexDirection: 'row'}}>
    <input type='checkbox'></input>
    <div key = {value.id}>{value.text}  {value.remove.toString()}</div>
    <label>
      <input onClick={() => remove(index)} type="checkbox" checked={false}  />
      { value.remove === true && <div style={{margin: -15, color:'red', fontSize: 10}}> X</div>} 
    </label>
  </div>)

  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <hr></hr>
      <div style={{flexDirection: 'column', height: "30%", width: "60%"}}>
        {array}
      </div>
    </div>
  );
}

export default App;
