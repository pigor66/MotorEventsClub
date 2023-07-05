import React, { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Placeholder, Row, Toast, ToastContainer } from 'react-bootstrap';
import { useRouter } from 'next/router';
import ProgressBarComponent from '@/components/progressbar/progressbar';
import Head from 'next/head'
import Link from 'next/link';
import ToastComponent from '@/components/toast/toast';


export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [alertsProps, setAlertProps] = useState<any>();

  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    event.preventDefault();
    const form = event.currentTarget;
    if (!form.login.value.includes('@') || form.login.value === '') {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);

    } if (form.password.value === '') {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);

    } if (form.login.value && form.password.value) {

      router.push('/');
    }

  };
  return (
    <div className='dark vh-100'>
      <Head>
        <title>Moto Events Club | Login</title>
        <meta name="description" content="Entre e encontre teu evento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastComponent
        bg={alertsProps?.bg}
        text={alertsProps?.text}
        title={alertsProps?.title}
        time={alertsProps?.time}
        description={alertsProps?.description}
        show={show}
        setShow={setShow}
      />

      {isLoading ? (
        <Container className="d-flex justify-content-center position-relative vh-100">
          <ProgressBarComponent setIsLoading={setIsLoading} />

        </Container>
      ) : (
        <>
          <Container className="d-flex align-items-center justify-content-center vh-100 flex-column">



            <h3 className='text-center mb-5'>Entre para acessar os eventos</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">

              <Form.Group controlId="validationCustom01" className="mb-3"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="Digite seu email"
                  name='login'
                  style={{ minWidth: '20rem' }}
                />
                <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Por favor insira seu email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom02" className="mb-5">
                <Form.Control
                  required
                  type="password"
                  placeholder="Digite sua senha"
                  name='password'
                />
                <Form.Control.Feedback>muito bem!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Por favor insira sua senha.
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" style={{ minWidth: '20rem' }}
              >Entrar</Button>
            </Form>
            <Link href='/register' className='mt-4'>
              Criar conta
            </Link>
          </Container>
        </>
      )
      }
    </div >
  );
}
