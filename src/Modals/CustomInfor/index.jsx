import React, { useState } from 'react';
import './CustomInfor.scss'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector } from 'react-redux';
import { changeInfor, closeInforModal } from '../../actions';

export default function CustomInfor() {
    const dispatch = useDispatch();

    // const [show, setShow] = useState(true);

    const handleClose = () => {
        dispatch(closeInforModal())
    };

    const handleCustomInfor = (e) => {
        e.preventDefault();
        const result = {
            name: e.target.elements.name.value,
            address : e.target.elements.address.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value
        }
        dispatch(changeInfor(result))
        handleClose()
    }

    const show = useSelector(state => state.inforModal)
    
  return (
   <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="centering w-100 form-title">
            Custom your infor
          </div>
           <div className="close-modal" variant="secondary" onClick={handleClose}>
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
        </Modal.Header>
        
        <Modal.Body>
            <Form onSubmit={(e) => handleCustomInfor(e)}>
                <Form.Group className="mb-3" controlId="name">
                    <i className="fa-solid fa-signature"></i><Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <i className="fa-solid fa-location-pin"></i><Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <i className="fa-regular fa-envelope"></i><Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <i className="fa-solid fa-phone"></i><Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Phone" />
                </Form.Group>
                
                <button className="primary-button mr-2 w-100" variant="primary" type="submit">
                    Submit
                </button>
               

            </Form>
        </Modal.Body>

      </Modal>
    </>
  )
}
