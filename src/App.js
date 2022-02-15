import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header>
        
        <NavBar/>
      <div>

        <Routes>
        
          
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route path="/producto/:itemId" element={<ItemDetailContainer  />}/>
          
        </Routes>
        </div>  
          </header>
          </div>
    </BrowserRouter>
  );
}

export default App;
