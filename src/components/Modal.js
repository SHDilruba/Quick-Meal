import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 const MyModal = ({reviewService, review, handleStatusUpdate}) => {
  const {_id, customer, name, message, email, service,status } = review;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 


  return (
    <div>
      <Button variant="light border-dark" onClick={handleShow}>
       Edit
      </Button>
      <Modal show={show} onHide={handleShow}>
      <Modal.Header>
          <Modal.Title>
            <div className='text-center mt-3'>
                 <h3>{reviewService.name}</h3>
                  <small className='text-warning'>{review.email}</small>
                 <div> 
                    <small className=''>{review.customer}</small>
                 </div>
                   <img className='w-100 img-fluid mt-3' src={reviewService.picture} alt=""/>
             </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className='text-center'>
                <h6 className='text-warning'>Your Review:</h6>
                <p>{review.message}</p>
              </div>
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => handleStatusUpdate(_id)} variant="warning border-dark">{status ? status : 'pending'}</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>        
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;