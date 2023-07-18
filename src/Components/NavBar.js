import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../../src/Components/CartWidget';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <div> 
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Menú</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/articulos'>Artículos</Link>
            <Link to='/categorias'>Categorías</Link>
            <Link to='/cart'><CartWidget/></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
