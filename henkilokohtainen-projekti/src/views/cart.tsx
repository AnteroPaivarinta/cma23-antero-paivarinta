import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="container-B">
      <div className='item-a'>
          <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
          <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'row', padding: 10}}>
          <Link to="/cart"> <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/> </Link>
            <Link style={{ textDecoration: 'none', backgroundColor: 'white', borderRadius: 10, fontSize: 20 ,color: 'red'}} to="/main">Shopping</Link>
          </div>
      </div>
      <div className='item-b'></div>
      <div className='item-c'>
       
      </div>
      <div className='item-d'>
        Anteron verkkokauppa, Y-4543, Tampere
      </div>
    </div>
  );
}

export default Cart;
