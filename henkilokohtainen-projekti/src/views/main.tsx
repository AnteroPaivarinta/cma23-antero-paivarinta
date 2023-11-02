import '../App.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FilterList } from '../components/filterList';
import { IFilterItem, IMainProps, IProduct } from '../types';
import ProductsList from '../components/productsList';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const Main = (props: IMainProps) => {

  const dispatch = useDispatch();
  const [filter, setFilter] = useState('Kaikki');
  const { param } = useParams();
  const navigate = useNavigate();
  const products: IProduct[] = [{name: 'Joku tuoli', id: '23', price: 30, category: 'Tuolit'}, {category: 'Vaatteet', id: '24', name: 'neule', price: 30}];

  const onSaveFilter = (filter: string) => {
    setFilter(filter)
  };

  const addToCart = (item: IProduct) => {
    dispatch({
      type: 'NEW_PRODUCT',
      payload: {
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price
      }
    })
  }

  const onHandleClose = () => {
    navigate("/main");
  }

  const onItemClick = (id:string) => {
    navigate("/main/"+id)
  }
  const data: IFilterItem[] = [
    {name: 'Vaatteet', },
    {name: 'Tietokoneet'},
    {name: 'Televisiot'},
    {name: 'Tulostimet'}, 
    {name: 'Kuulokkeet'},
    {name: 'Pöydät'},
    {name: 'Tuolit'},
    {name: 'Kaikki'}
   ];
  
  return (
    <div className="container">
      <div className='item-a'>
          <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
          <div style={{alignSelf: 'center', padding: 10}}>
            <Link to="/cart"> <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/> </Link>
            <Link style={{ textDecoration: 'none', backgroundColor: 'white', borderRadius: 10, fontSize: 20, color: 'red'}} to="/main">Shopping</Link>
            <Link to="/login"> Login </Link>
            <Link to="/register">Register</Link>
            <button onClick={() =>  localStorage.removeItem('token')}>Logout</button>
          </div>
      </div>
      <div className='item-b'>
        <FilterList data={data} onSaveFilter={onSaveFilter}/>
      </div>
      <div className='item-c'>
        { localStorage.getItem('token') &&
          <ProductsList 
            addToCart={addToCart} 
            data={(filter === 'Kaikki' ? products : products.filter((value:IProduct) => value.category === filter))} 
            onItemClick={onItemClick}
          /> 
        }
      </div>
     
      <div className='item-d'>
         Anteron verkkokauppa, Y-4543, Tampere
      </div>
      <Modal show={param ? true : false} onHide={onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{products.find((value) => value.id === param)?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> Hinta: {products.find((value) => value.id === param)?.price}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHandleClose}>
            Sulje
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}

export default Main;
