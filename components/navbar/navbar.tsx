import React from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';

export default function Menu() {

  return (
    <Navbar expand='md' className="bg-body-dark mb-3 border-bottom border-ligth" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end" data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success w-100">Procurar evento</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
