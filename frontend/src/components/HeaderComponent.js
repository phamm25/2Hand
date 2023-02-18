import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";

import { LinkContainer } from "react-router-bootstrap"; // allow not reloading page when navigate to homepage -> better user experience
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">2hand</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Textbooks</Dropdown.Item>
                  <Dropdown.Item>Clothings</Dropdown.Item>
                  <Dropdown.Item>Electronics</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control type="text" placeholder="Search items" />
              <Button variant="success">
                <i className="bi bi-binoculars"> Search</i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title="Minh Pham" id="collasible-nav-dropdown" >
              <NavDropdown.Item
                eventKey="/user/my-orders" // event key to highlight current path with blue background
                as={Link}
                to="/user/my-orders"
                // className="bg-success"
              >
                My orders
              </NavDropdown.Item >
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">CART</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
