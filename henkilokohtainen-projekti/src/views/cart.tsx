import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';


const Cart = () => {
  
  const products: any = useSelector(state => state);
  const total: number = products.map((val:any) => val.price).reduce((accumulator:any, currentValue:any) => accumulator + currentValue, 0);
  return (
    <div className="container-B">
      <div className='item-a'>
        <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
        <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'row', padding: 10}}>
          <Link to="/cart"> <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/> </Link>
          <Link style={{ textDecoration: 'none', backgroundColor: 'white', borderRadius: 10, fontSize: 20 ,color: 'red'}} to="/main">Shopping</Link>
        </div>
      </div>
      <div className='item-b'>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          {products.map((value:any) => <li style={{margin: 5}} key={value.name}>Nimi: {value.name}, Hinta: {value.price} $ </li>)}
          <hr style={{color:'white'}}></hr>
          <div style={{margin: 5}}>Total: {total} $</div>
          <Button style={{marginTop: 10, alignSelf: 'center', justifySelf: 'center'}} onClick={() => console.log('BUY')} size="sm" variant="success">TEE TILAUS</Button>
        </div>
      </div>
      <div className='item-c'></div>
      <div className='item-d'>
        Anteron verkkokauppa, Y-4543, Tampere
      </div>
    </div>
  );
}

export default Cart;
