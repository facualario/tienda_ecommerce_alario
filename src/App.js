import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header>
       
      <NavBar/>

      <div>
        <ItemListContainer greetings="Gracias por visitar la página,
        los productos estarán disponibles proximamente" />
      </div>

      
      
   
      </header>
    </div>
  );
}

export default App;
