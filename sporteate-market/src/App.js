//para generar el auto código de inicio de componente pongo "rafce"
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/Item/ItemListContainer';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import CartContext from './context/CartContext';
import { CartContainer } from './components/Cart/CartContainer';

function App() {
  return (
   // <CartContext.Provider value= {{productos}}>
    <BrowserRouter>
      <center>
        <NavBar/>
        <Routes>
          <Route 
            exact path='/' 
            element={<ItemListContainer/>}
          />
          <Route 
            exact path='/categoria/:cat_id' 
            element={<ItemListContainer/>}
          />
          <Route 
            exact path='/detalle/:prod_id' 
            element={<ItemDetailContainer/>}
          />
           <Route 
            exact path='/cart' 
            element={<CartContainer/>}
          />
        </Routes>
      </center>
    </BrowserRouter>
   // </CartContext.Provider>  
  );
}

export default App;
