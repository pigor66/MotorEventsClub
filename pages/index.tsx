import CardComponent from '@/components/card/card';
import Menu from '@/components/navbar/navbar';
import ProgressBarComponent from '@/components/progressbar/progressbar';
import Head from 'next/head'

import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='dark' style={{ minHeight: '100vh' }}>
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
              <Col lg={4} className='my-2'>
                <CardComponent
                  date='Sab, 22 JUL - 21:30'
                  cardBody='lorem asudashi audhauishd ausdhiasuhda ausdhiauhda ausdhaishdasjdas dasd sa da d a sd asd  qw eq e q wsd as df as f asd  sdf as fas da sd as d asd as  da sd as d asd as df dg sfd  qw e wq da sd a  sd as f sa ad f a   dasdasd asd asdasdasd asdasdasd asdas dasdasdas dasdasdasrdqw d as d asd a s'
                  image='https://lh3.google.com/u/0/d/1WbVXrGwe3QcFO0da2BPNCaEWILxWtXaF=w2000-h1576-iv1'
                />
              </Col>
              <Col lg={4} className='my-2'>
                <CardComponent
                  date='Sab, 22 JUL - 21:30'
                  cardBody='Descrição do evento xpto'
                  image='https://lh3.google.com/u/0/d/1WbVXrGwe3QcFO0da2BPNCaEWILxWtXaF=w2000-h1576-iv1'
                />
              </Col>
              <Col lg={4} className='my-2'>
                <CardComponent
                  date='Sab, 22 JUL - 21:30'
                  cardBody='Descrição do evento xpto'
                  image='https://lh3.google.com/u/0/d/1WbVXrGwe3QcFO0da2BPNCaEWILxWtXaF=w2000-h1576-iv1'
                />
              </Col>
              <Col lg={4} className='my-2'>
                <CardComponent
                  date='Sab, 22 JUL - 21:30'
                  cardBody='Descrição do evento xpto'
                  image='https://lh3.google.com/u/0/d/1WbVXrGwe3QcFO0da2BPNCaEWILxWtXaF=w2000-h1576-iv1'
                />
              </Col>
              <Col lg={4} className='my-2'>
                <CardComponent
                  date='Sab, 22 JUL - 21:30'
                  cardBody='Descrição do evento xpto'
                  image='https://lh3.google.com/u/0/d/1WbVXrGwe3QcFO0da2BPNCaEWILxWtXaF=w2000-h1576-iv1'
                />
              </Col>

            </Row>
          </Container >
        </>
      )
      }
      <footer className='text-center py-4'>
        <div>Criado por Higor Ribeiro &copy;2023</div>
        parceria Consistentes MG</footer>
    </div >
  );
}

