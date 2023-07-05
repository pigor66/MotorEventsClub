import Menu from '@/components/navbar/navbar';
import ProgressBarComponent from '@/components/progressbar/progressbar';
import Head from 'next/head'
import teste from '../public/images/8.png'

import React, { useState } from 'react';
import { Accordion, Badge, Button, Card, CardGroup, Col, Container, Dropdown, Modal, Placeholder, Row, Stack } from 'react-bootstrap';


function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='dark vh-100'>
      <Head>
        <title>Moto Events Club</title>
        <meta name="description" content="Encontre um evento e bons ventos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Container className="d-flex align-items-center justify-content-center vh-100 ">
          <ProgressBarComponent setIsLoading={setIsLoading} />
        </Container>
      ) : (
        <>
          <Menu />
          <Container className='d-flex flex-column justify-content-between pb-5 pt-5 ' >
            <Row>
              <Col lg={4}>
                <Card className='bg-dark text-light' >
                  <Card.Img variant="top" src="/images/8.png" style={{ height: '10rem', width: '10rem', margin: 'auto' }} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className=" text-secondary ">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>

              </Col>
              <Col lg={4}>
                <Card className='bg-dark text-light' >
                  <Card.Img variant="top" src="/images/8.png" style={{ height: '10rem', width: '10rem', margin: 'auto' }} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className=" text-secondary ">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className='bg-dark text-light' >
                  <Card.Img variant="top" src="/images/8.png" style={{ height: '10rem', width: '10rem', margin: 'auto' }} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className=" text-secondary">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container >
        </>
      )
      }
    </div >
  );
}

