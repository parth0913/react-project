import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './OffCanvas.module.css';

export default function OffCanvas({ placement = 'end', content }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={styles.offcanvasButton}>
        <img src='	https://www.fnp.com/icons/info-circle-gray.svg' alt='T&C'/>
      </button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Terms & Conditions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>{content}</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
