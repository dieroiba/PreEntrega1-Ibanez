import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import imagen1 from './images/carrito-de-compras.jpg';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting="Bienvenido al carrito de compras!"/>
    <img src={imagen1} alt='carrito de compras'/>
    </div>
  );
}

export default App;
