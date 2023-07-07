import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';

import { MdKeyboardArrowDown, MdOutlineLocationOn } from 'react-icons/md';
import ModalComponent from '../modal/modal';
import Image from 'react-bootstrap/Image';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';


export default function Menu(...props: any) {
  const [show, setShow] = useState(false);
  const { data: session } = useSession()
  const router = useRouter();

  if (!session) {
    router.push('/login')

  }

  function logOut() {
    signOut()
  }
  const handleShow = () => setShow(true);

  return (
    <Navbar expand='md' className="bg-body-dark  border-bottom border-ligth " data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          {/* <Image src={logo} alt="" width={'80'} /> */}
          Moto events club
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Image src={session?.user?.image || ''} alt='user picture' roundedCircle style={{ width: '3rem' }} />
        <div onClick={() => logOut()} className=' ms-4' style={{ cursor: 'pointer' }} >Sair</div>
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
                <Nav.Link className='d-flex align-items-center ' onClick={handleShow}>
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
            <ModalComponent
              show={show}
              setShow={setShow}
              handleShow={handleShow}
              textCancelButton="Cancelar"
              textSubmitButton="Confirmar"
              modalTitle='Titulo do modal'
              description='Aqui vai o texto do corpo do modal'
            />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar >
  )
}
