import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-light text-decoration-none">
            Navbar
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            to="/register"
            className="text-light text-decoration-none me-3"
          >
            Register
          </NavLink>
          <NavLink to="/login" className="text-light text-decoration-none me-3">
            Login
          </NavLink>
          <NavLink to="/add" className="text-light text-decoration-none me-3">
            Add
          </NavLink>
          <NavLink
            to="/viewadv"
            className="text-light text-decoration-none me-3"
          >
            ViewAdv
          </NavLink>
          <NavLink to="/alladv" className="text-light text-decoration-none">
            AllAdv
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
