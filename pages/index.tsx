import FormComponent from '@/components/form/form';
import Menu from '@/components/navbar/navbar';
import ProgressBarComponent from '@/components/progressbar/progressbar';
import Head from 'next/head'

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='dark vh-100'>
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
          <Container>
            Bem vindo fulano
          </Container>
        </>
      )}
    </div>
  );
}
