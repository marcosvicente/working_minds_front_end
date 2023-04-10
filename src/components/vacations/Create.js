import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Create() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [date_init, setDateInit] = useState('');
    const [date_end, setDateEnd] = useState('');
    const [employee_id, setEmployeeId] = useState('');
    const [error, setError] = useState(null);

    const postData = () => {
        axios.post(`http://127.0.0.1:3000/vacations`, {
          vacation : {
            date_init,
            date_end,
            employee_id
          }
        })
        .then((response) => {
          if (response.data.status === "success") {
            setShow(true)
            this.resetForm();
           } else if (response.data.status === "fail") {
            setError(error.response.data);
          }
        })
        .catch(error => {
          setError(error.response.data);
          console.log(error.response.data)
       })
    }
    return (
      <>
        <Button variant="primary" onClick={() => this.setState({ modal: true })}>
          Create Vacation
        </Button>

        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Create vacation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Date Init</Form.Label>
                    <Form.Control type="date" placeholder='Date Init' onChange={(e) => setDateInit(e.target.value)}  />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Date end</Form.Label>
                    <Form.Control type="date" placeholder='Date Init' onChange={(e) => setDateEnd(e.target.value)}  />
                  </Form.Group>
                  
                  <Form.Control type="text" placeholder='Date Init' onChange={(e) => setEmployeeId((e.target.value))}  />

                  <Button variant="primary" onClick={postData} >
                    Submit
                  </Button>

                  {error !== null &&
                    <p className="Error">
                      {
                        error.map((err) => {
                          <p>{err}</p>
                        }) 
                      }
                  </p>
                  }
              </Form>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ modal: false })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
     </>
    )
}