import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ToastComponent from '@/components/toast/toast';
import Head from 'next/head';


export default function Login() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [alertsProps, setAlertProps] = useState<any>();
  const router = useRouter();


  const handleSubmit = (event: any) => {
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

    } if (form.replacePassword.value !== form.password.value) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
      setAlertProps(
        {
          bg: 'danger',
          text: 'light',
          title: 'Erro',
          time: 'Agora',
          description: 'As senhas não correspondem',
          show: show,
          setShow: setShow,
        })
      setShow(true)
    } if (form.login.value.includes('@') && form.password.value === form.replacePassword.value) {

      router.push('/home');
    }
  };
  return (
    <div className='dark vh-100'>
      <Head>
        <title>Moto Events Club | Registro</title>
        <meta name="description" content="Faça seu cadastro e encontre o evento mais proximo" />
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
      <Container className="d-flex align-items-center justify-content-center vh-100 flex-column">
        <h3 className='text-center mb-5'>Registro</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">

          <Form.Group controlId="validationCustom01" className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="Digite seu email"
              name='login'
            />
            <Form.Control.Feedback>Agora sim!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor insira seu email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02" className='mb-3' >
            <Form.Control
              required
              type="password"
              placeholder="Digite sua senha"
              name='password'
            />
            <Form.Control.Feedback>Agora sim!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor insira sua senha.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02" className="mb-5">
            <Form.Control
              type="password"
              placeholder="Confirme sua senha"
              name='replacePassword'
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Ao entrar voce aceita os termos e condições da plataforma"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              name='terms'
            />
          </Form.Group>
          <Button type="submit">Entrar</Button>
        </Form>
      </Container>
    </div >
  );
}
