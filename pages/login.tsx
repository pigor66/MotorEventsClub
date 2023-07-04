import React, { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import ProgressBarComponent from '@/components/progressbar/progressbar';
import Head from 'next/head'


export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity() === false) {
      setValidated(true);
      router.push('/');
    } else {
      event.preventDefault();
      event.stopPropagation();
      setShow(true)

    }

  };
  return (


    <div className='dark vh-100'>
      <Head>
        <title>Moto Events Club</title>
        <meta name="description" content="Encontre eventos e se divirta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Algo deu errado</Alert.Heading>
          <p>
            Preencha os campos para poder acessar
          </p>
        </Alert>
      </Container>
      {isLoading ? (
        <Container className="d-flex align-items-center justify-content-center vh-100">
          <ProgressBarComponent setIsLoading={setIsLoading} />
        </Container>
      ) : (
        <>
          <Container className="d-flex align-items-center justify-content-center vh-100 flex-column">

            <Card bg='dark' text='light' className='mb-5' style={{ width: '22rem' }}>
              <Card.Header>
                <h3 className='text-center'>Login</h3>
              </Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">

                  <Form.Group controlId="validationCustom01" className="mb-3">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Digite seu email"
                      name='login'
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationCustom02" className="mb-5">
                    <Form.Control
                      required
                      type="password"
                      placeholder="Digite sua senha"
                      name='password'
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="ao entrar voce aceita os termos e condições da plataforma"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      name='terms'
                    />
                  </Form.Group>
                  <Button type="submit">Entrar</Button>
                </Form>
              </Card.Body>
              <Card.Footer>

              </Card.Footer>
            </Card>
          </Container>
        </>
      )
      }
    </div >
  );
}
