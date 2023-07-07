import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ProgressBarComponent from './components/progressbar/progressbar';
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'react-bootstrap/Image';



export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession()
  if (session) {
    return <div className='dark vh-100'>
      <Head>
        <title>Moto Events Club | Login</title>
        <meta name="description" content="Entre e encontre teu evento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Container className="d-flex justify-content-center position-relative vh-100">
          <ProgressBarComponent setIsLoading={setIsLoading} />

        </Container>
      ) : (
        <>
          <Container className="d-flex align-items-center justify-content-center vh-100 flex-column">

            <Image src={session?.user?.image} alt='user picture' roundedCircle />
            <h3 className='text-center mb-5'>Bem vindo {session.user?.name}</h3>
            <Button onClick={() => signOut()}>Sair</Button>
          </Container>
        </>
      )
      }
    </div >
  } else {
    return <div className='dark vh-100'>
      <Head>
        <title>Moto Events Club | Login</title>
        <meta name="description" content="Entre e encontre teu evento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Container className="d-flex justify-content-center position-relative vh-100">
          <ProgressBarComponent setIsLoading={setIsLoading} />

        </Container>
      ) : (
        <>
          <Container className="d-flex align-items-center justify-content-center vh-100 flex-column">
            <Button onClick={() => signIn()}>Entrar</Button>
          </Container>
        </>
      )
      }
    </div >
  }
}
