import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FilterList } from './components/filterList';
import { IFilterItem, IProduct } from './types';
import ProductsList from './components/productsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/main';
import Cart from './views/cart';
import Register from './views/register';
import Login from './views/login';

function App() {
  // Routerointi, Varastopaikka(näkyy eri tavalla), ASPNET tietokannan suhteen, Tietotkantataulu , Productille kaksi iD:tä
  return (
    <BrowserRouter>
      <Routes >
        <Route index element={<Main />} />
        <Route path="main" element={<Main/>} />
        <Route path="main/:param" element={<Main/>} />
        <Route path="cart" element={<Cart />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
