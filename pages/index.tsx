import Menu from '@/components/navbar/navbar';
import ProgressBarComponent from '@/components/progressbar/progressbar';
import Head from 'next/head'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import React, { useState } from 'react';
import { Accordion, Badge, Button, Card, CardGroup, Container, Dropdown, Modal, Placeholder, Stack } from 'react-bootstrap';


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
    <div className='dark h-100'>
      <Head>
        <title>Moto Events Club</title>
        <meta name="description" content="Encontre eventos e se divirta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Container className="d-flex align-items-center justify-content-center vh-100">
          <ProgressBarComponent setIsLoading={setIsLoading} />
        </Container>
      ) : (
        <>
          <Menu />
          <Container className='d-flex flex-column justify-content-between pb-5' >


            <Accordion defaultActiveKey="0" className='mb-5'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Stack direction="horizontal" gap={2} className='mb-5'>
              <Badge pill bg="primary">
                Primary
              </Badge>
              <Badge pill bg="secondary">
                Secondary
              </Badge>
              <Badge pill bg="success">
                Success
              </Badge>
              <Badge pill bg="danger">
                Danger
              </Badge>
              <Badge pill bg="warning" text="dark">
                Warning
              </Badge>
              <Badge pill bg="info">
                Info
              </Badge>
              <Badge pill bg="light" text="dark">
                Light
              </Badge>
              <Badge pill bg="dark">
                Dark
              </Badge>
            </Stack>

            <div className='mb-5'>
              <Button variant="outline-primary">Primary</Button>{' '}
              <Button variant="outline-secondary">Secondary</Button>{' '}
              <Button variant="outline-success">Success</Button>{' '}
              <Button variant="outline-warning">Warning</Button>{' '}
              <Button variant="outline-danger">Danger</Button>{' '}
              <Button variant="outline-info">Info</Button>{' '}
              <Button variant="outline-light">Light</Button>{' '}
              <Button variant="outline-dark">Dark</Button>
            </div>

            <CardGroup className='mb-5'>
              <Card bg='dark' text='light'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card bg='dark' text='light'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
            <Dropdown className='mb-5'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className='mb-5'>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="d-flex justify-content-around mb-5">
              <Card bg='dark' text='light'
                style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card bg='dark' text='light'
                style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </div>
            <Tabs className='mb-5 '
              defaultActiveKey="profile"
              id="justify-tab-example"
              justify
              clas
            >
              <Tab eventKey="home" title="Home">
                Tab content for Home
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Tab content for Profile
              </Tab>
              <Tab eventKey="longer-tab" title="Loooonger Tab">
                Tab content for Loooonger Tab
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
              </Tab>
            </Tabs>
          </Container>
        </>
      )}
    </div>
  );
}

