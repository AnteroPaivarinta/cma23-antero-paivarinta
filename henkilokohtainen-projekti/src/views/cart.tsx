import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const Cart = () => {
  
  const products: any = useSelector(state => state);
  const total: number = products.map((val:any) => val.price).reduce((accumulator:any, currentValue:any) => accumulator + currentValue, 0);
  const makeOrder = () => {
    const date = Date.now().toString()
    const randomId: string =  uuidv4();
    for(let i = 0; i < products.length; i++){
      
      const jwtToken = localStorage.getItem('token');
      console.log('JWTTOKEN', jwtToken);
      if(jwtToken) {
        const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));
        const ob = {
          id: randomId,
          order_time: date,
          product_id: products[i].id,
          name: products[i].name,
          user_id: decodedToken.id
        }
        console.log('OB', ob)
        const headers = {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json' 
        };
        axios.post("http://localhost:5185/api/orders/addOrder", ob, { headers })
          .then(response => {
            console.log('Vastaus:', response.data);
          })
          .catch(error => {
            console.error('Virhe:', error);
          });
      }
    }
  }
  return (
    <div className="container-B">
      <div className='item-a'>
        <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
        <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'row', padding: 10}}>
          <Link to="/cart"> <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/> </Link>
            <Link style={{ textDecoration: 'none', backgroundColor: 'white', borderRadius: 10, fontSize: 20 ,color: 'red'}} to="/main">Shopping</Link>
            <Link to="/cart"> Login </Link>
            <Link to="/main">Register</Link>
        </div>
      </div>
      <div className='item-b'>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          {products.map((value:any) => <li style={{margin: 5}} key={value.name}>Nimi: {value.name}, Hinta: {value.price} $ </li>)}
          <hr style={{color:'white'}}></hr>
          <div style={{margin: 5}}>Total: {total} $</div>
          <Button style={{marginTop: 10, alignSelf: 'center', justifySelf: 'center'}} onClick={() => makeOrder()} size="sm" variant="success">TEE TILAUS</Button>
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
