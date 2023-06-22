import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink to="/register">Register</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/login">Login</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
