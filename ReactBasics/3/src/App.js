import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TodoNote from './TodoNote';
import { v4 as uuidv4 } from 'uuid';
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
  const [text, setText ] = useState('');

  const toggleCompletion = (id) => {

    const index = arrayData.findIndex((value) => value.id === id);
    const copy = [...arrayData];
    let bool = copy[index].complete
    copy[index] = {...copy[index], complete: !bool};
    setArrayData(copy);
  }

  const addTodo = (text) => {
    setArrayData([...arrayData, {
      id: uuidv4(),
      complete: false,
      text: text,
    }])
  }


  const remove = (value, index) => {
    const id = value.id
    const copy = [...arrayData];
    let bool = copy[index].remove
    copy[index] = {...copy[index], remove: !bool};
    const filtered = copy.filter((value) => value.id !== id);
    console.log('Filtered', filtered)
    setArrayData(filtered);
  }
  
  useEffect(() => {
    console.log('array', arrayData)
  }, [arrayData]);
 

  const array = arrayData.map((value, index) => 
    <TodoNote index={index} value={value} remove={remove} toggleCompletion={toggleCompletion} />
  )

  return (
    <div className="App">
      <h1>Assignment 1, 2, 4, 5 JA seuravaan kappaleen Assignment 1</h1>
      <hr></hr>
      <div style={{display:'flex' , flexDirection: 'row', height: "69%", width: "100%"}}>
        <div style={{ display:'flex' , flexDirection: 'column', height:  '100vh', width: "30%"}}>
          {array} 
        </div>
        <div style={{ display:'flex' , flexDirection: 'column', height: '100vh', width: '30%', alignContent: 'center'}}>
          <label style={{fontWeight: 'bold'}}>
            Title:  
            <input placeholder='Type something here..' value={text} onChange={(e) => setText(e.target.value)}></input>
            <div>
              <button className='buttonStyle' onClick={() => addTodo(text)}><div style={{fontWeight: 'bold'}}>Submit</div></button>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
