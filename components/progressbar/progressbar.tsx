

import React, { useEffect, useState } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

export default function ProgressBarComponent(props: any) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      props.setIsLoading(false);
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 95) {
          clearInterval(progressInterval);
        }


        return prevProgress + 5;

      });
    }, 25);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (

    <Container className="d-flex align-items-center justify-content-center vh-100">
      <ProgressBar animated now={progress} variant='danger' className="w-50" label={`${progress}%`} />
    </Container>


  );
}
