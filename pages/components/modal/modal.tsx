import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent(props: any) {
    const handleClose = () => props.setShow(false);
    console.log(props.show);

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton className='bg-dark text-light'>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-light'>{props.description}</Modal.Body>
            <Modal.Footer className='bg-dark text-light'>
                <Button variant="secondary" onClick={handleClose}>
                    {props.textCancelButton}
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    {props.textSubmitButton}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;
