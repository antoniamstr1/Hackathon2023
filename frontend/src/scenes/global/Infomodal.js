import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';


export default function InfoModal(open) {
  const [show, setShow] = useState(false);
  
  function handleClose(clicked) {
    setShow(false)
    if (clicked) {
        let d = " "
      //window.location.replace("https://www.fer.unizg.hr")
    }
  };
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button className="nextButton" onClick={()=>{handleShow}}>
        Open Modal
      </Button> */}

      <Modal show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleClose(true)}}>
            yes
          </Button>
          <Button variant="primary" onClick={()=>handleClose(false)}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}