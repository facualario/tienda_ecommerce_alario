import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart';




function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
          
          <NavBar/>
        <div>

          <Routes>
          
            
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryName" element={<ItemListContainer />}/>
            <Route path="/producto/:itemId" element={<ItemDetailContainer  />}/>
            <Route path="/cart" element={<Cart/>}/>
            
          </Routes>
          </div>  
            </header>
            </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
