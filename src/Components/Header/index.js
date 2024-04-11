import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import { CgProfile } from "react-icons/cg";
import { IoCart } from "react-icons/io5";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Karo Abhayaa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/" className="btn btn-dark">
                JOIN Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/classes" className="header-list-item">
                Classes
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className="header-list-item">
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about-us" className="header-list-item">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" className="header-list-item">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profile" className="header-list-item">
                <CgProfile />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart" className="header-list-item">
                <IoCart />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
