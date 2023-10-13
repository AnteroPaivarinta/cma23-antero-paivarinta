import '../App.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FilterList } from '../components/filterList';
import { IFilterItem, IProduct } from '../types';
import ProductsList from '../components/productsList';
import { Outlet, Link } from "react-router-dom";

function Main() {

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
  const [filter, setFilter] = useState('Kaikki');
  const products: IProduct[] = [{name: 'Joku tuoli', price: 30, category: 'Tuolit'}, {category: 'Vaatteet', name: 'neule', price: 30}]
  const cart: IProduct[] = [];
  const onSaveFilter = (filter: string) => {
    setFilter(filter)
  }
  const addToCart = (item: IProduct) => {
    cart.push(item);
  }
  useEffect(() => {

  });
  return (
    <div className="container">
      <div className='item-a'>
          <h1 style={{color: 'white', fontSize: 30, padding: 15, alignSelf: 'center'}}>Anteron verkkokauppa</h1>
          <div style={{alignSelf: 'center', padding: 10}}>
            <Link to="/cart"> <FontAwesomeIcon color='white' fontSize={30} icon={faCartShopping}/> </Link>
            <Link style={{ textDecoration: 'none', backgroundColor: 'white', borderRadius: 10, fontSize: 20 ,color: 'red'}} to="/main">Shopping</Link>
          </div>
      </div>
      <div className='item-b'>
        <FilterList data={data} onSaveFilter={onSaveFilter}/>
      </div>
      <div className='item-c'>
        <ProductsList addToCart={addToCart} data={(filter === 'Kaikki' ? products : products.filter((value:IProduct) => value.category === filter))} />
      </div>
      <div className='item-d'>
         Anteron verkkokauppa, Y-4543, Tampere
      </div>
    </div>
  );
}

export default Main;
