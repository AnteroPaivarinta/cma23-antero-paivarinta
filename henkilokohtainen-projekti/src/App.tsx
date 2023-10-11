import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import filterList, { FilterList } from './components/filterList';
import { IFilterItem } from './types';

function App() {
  const data: IFilterItem[] = [
   {name: 'Vaatteet'},
   {name: 'Tietokoneet'},
   {name: 'Televisiot'},
   {name: 'Tulostimet'}, 
   {name: 'Kuulokkeet'},
   {name: 'Pöydät'},
   {name: 'Tuolit'},
   {name: 'Tuolit'},
  ]
  return (
    <div className="container">
      <div className='item-a'>
          <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
          <div style={{alignSelf: 'center', padding: 10}}>
            <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/>
          </div>
      </div>
      <div className='item-b'>
        <FilterList data={data}/>
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
