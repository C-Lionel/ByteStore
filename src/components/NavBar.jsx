import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router";
import styles from "./NavBar.module.css";
import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget";

const NavBar = ({ categories }) => {

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

          <Nav className={`${styles.nav} flex-grow-1 justify-content-center`}>

            {categories.map(cat => (
              <NavLink
                key={cat}
                to={`/category/${cat}`}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.activeLink}`
                    : styles.link
                }
              >
                {cat}
              </NavLink>
            ))}

          </Nav>

          <div className={styles.cartContainer}>
            <CartWidget />
          </div>


        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBar;