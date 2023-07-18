import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import imagen1 from './images/carrito-de-compras.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Home';
import Artículos from '../src/Articulos';
import Categorías from '../src/Categorias';
import Error from '../src/Error';
import CartWidget from '../src/Components/CartWidget';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/articulos' element={<Artículos/>}/>
              <Route path='/categorias' element={<Categorías/>}/>
              <Route path='/carrito' element={<CartWidget/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>
            <ItemListContainer greeting="Bienvenido al carrito de compras!"/>
            <img src={imagen1} alt='carrito de compras'/>
      </BrowserRouter>
    </div>
  );
}

export default App;
