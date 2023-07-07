import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';
import ProgressBarComponent from '@/components/progressbar/progressbar';



export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession()
  const router = useRouter();
  const [count, setCount] = useState(4);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);


  if (session) {
    setTimeout(() => { router.push('/') }, 5000
    )


    return (
      <div className='dark vh-100'>
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
              <p>{count === 0 ? 'Redirecionando para a home' : (`aguarde ${count} segundos`)}</p>
              <Image src={session?.user?.image || ''} alt='user picture' roundedCircle />
              <h3 className='text-center mb-5'>Bem vindo {session.user?.name}</h3>
              <Button onClick={() => signOut()}>Sair</Button>
            </Container>
          </>
        )
        }
      </div >
    )
  } else {
    return (
      <div className='dark vh-100'>
        <Head>
          <title>Moto Events Club | Login</title>
          <meta name="description" content="Entre e encontre teu evento" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container className="d-flex align-items-center justify-content-center vh-100 flex-column">
          <h3 className='text-center mb-5'>Clique para entrar</h3>
          <Button onClick={() => signIn()}>Google</Button>
        </Container>
      </div >
    )
  }
}
