import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FilterList } from './components/filterList';
import { IFilterItem, IProduct } from './types';
import ProductsList from './components/productsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/main';
import Cart from './views/cart';

function App() {

  return (
    <BrowserRouter>
      <Routes >
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
