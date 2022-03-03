import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart';
import AddOrder from './components/AddOrder';
import CompleteMessage from './components/CompleteMessage';




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

            <Route path="/order" element={<AddOrder/>}/>
            <Route path="/complete" element={<CompleteMessage/>}/>
            
          </Routes>
          </div>  
            </header>
            </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
