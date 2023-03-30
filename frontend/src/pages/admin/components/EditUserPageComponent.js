import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const EditUserPageComponent = ({ updateUserApiRequest }) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;
    const name = form.name.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const isAdmin = form.isAdmin.checked;
    if (event.currentTarget.checkValidity() === true) {
        updateUserApiRequest(name, lastName, email, isAdmin);
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/users" className="btn btn-info my-3">
            Go Back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit user</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                defaultValue="John"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                required
                type="text"
                defaultValue="Doe"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                defaultValue="John@email.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="isAdmin" type="checkbox" label="Is admin" />
            </Form.Group>

            <Button variant="primary" type="submit">
              UPDATE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUserPageComponent;

