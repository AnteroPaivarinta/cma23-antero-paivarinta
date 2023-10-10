import logo from './logo.svg';
import './App.css';
import img from './Sieppaa.png'

function App() {
  return (
    <div className="App">
      <p>This is a paragraph.</p>
      <p>This is a paragraph.</p>
      <p>This is a paragraph.</p>
      <a href="www.google.com">link text</a>
      <img height="100" width="100" src={img}></img>
      <input placeholder ="firstName"></input>
      <input placeholder ="lastName"></input>
      <input type="radio" value="HTML"></input>
      <button> Submit</button>
      <button> Reset</button>

      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </div>
  );
}

export default App;
