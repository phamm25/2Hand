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
            <Nav.Link>Admin</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">
              <Badge pill bg="danger">
                2
              </Badge>
              CART
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
