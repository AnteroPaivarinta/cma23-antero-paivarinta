import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container">
      <div className='item-a'>
          <h1 style={{color: 'white', fontSize: 30, padding: 5}}>Anteron verkkokauppa</h1>
          <div style={{alignSelf: 'center', padding: 10}}>
            
            <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/>

          </div>
      </div>
      <div className='item-b'>
        Item b
      </div>
      <div className='item-c'>
        Item c
      </div>
      <div className='item-d'>
        Item d
      </div>
    </div>
  );
}

export default App;
