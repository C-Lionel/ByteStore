import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import CartWidget from './CartWidget';
import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="#" className={styles.brand}>
          <img src={logo} alt="ByteStore Logo" className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' href="#">Hardware</Nav.Link>
            <Nav.Link className='text-white' href="#">Periféricos</Nav.Link>
            <Nav.Link className='text-white' href="#">Componentes</Nav.Link>
            <Nav.Link className='text-white' href="#">Notebooks</Nav.Link>
            <Nav.Link className='text-white' href="#">Accesorios</Nav.Link>
          </Nav>

          <CartWidget />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

