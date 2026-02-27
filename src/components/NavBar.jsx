import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";
import styles from "./NavBar.module.css";
import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget";

const NavBar = ({ categories, categoryMap }) => {

  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>

        <Navbar.Brand
          as={Link}
          to="/"
          className={styles.brand}
        >
          <img
            src={logo}
            alt="ByteStore Logo"
            className={styles.logo}
          />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">

            {categories.map(cat => (
              <Nav.Link
                key={cat}
                as={Link}
                to={`/category/${cat}`}
                className="text-white"
              >
                {categoryMap[cat]}
              </Nav.Link>
            ))}

          </Nav>

          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;