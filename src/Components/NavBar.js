import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../../src/Components/CartWidget';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Menú</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Artículos</Nav.Link>
            <Nav.Link href="#pricing">Categorías</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

export default NavBar;
