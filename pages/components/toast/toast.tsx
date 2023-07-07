import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';



export default function ToastComponent(props: any) {

  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
      <Toast bg={props.bg} onClose={() => props.setShow(false)} show={props.show} delay={3000} autohide >
        <Toast.Header className={`bg-${props.bg} text-${props.text} `}>
          <strong className="me-auto">{props.title}</strong>
          <small>{props.time}</small>
        </Toast.Header>
        <Toast.Body className={`bg-${props.bg} text-${props.text} `}>
          {props.description}
        </Toast.Body>
      </Toast>
    </ToastContainer>

  );
}
