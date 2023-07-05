import React from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../../public/images/8.png'
import Image from 'next/image';
import { MdKeyboardArrowDown, MdOutlineLocationOn } from 'react-icons/md';


export default function Menu() {

  return (
    <Navbar expand='md' className="bg-body-dark  border-bottom border-ligth " data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          {/* <Image src={logo} alt="" width={'80'} /> */}
          Moto events club
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end" data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Moto events club
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-between align-items-center flex-grow-1">
              <div className='d-flex justify-content-center mx-auto'>
                <Nav.Link className='d-flex align-items-center '>
                  <MdOutlineLocationOn style={{ fontSize: '1.5rem' }} className='me-lg-5 ' />
                  Qualquer lugar
                  <MdKeyboardArrowDown style={{ fontSize: '1.5rem' }} className='ms-lg-5 ' />
                </Nav.Link>
              </div>
              <Nav.Link href="#action1" className="text-center mx-3 my-1 w-lg-25">Faça seu evento</Nav.Link>
              <Nav.Link href="/login" className="text-center mx-3 my-1 w-lg-25">Acesse sua conta</Nav.Link>
              <div className='mx-lg-3 my-1 '>
                <Button variant="outline-danger" href='/register' size='sm'> Cadastre-se</Button>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar >
  )
}
