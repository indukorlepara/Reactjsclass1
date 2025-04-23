
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import  Binding  from './Binding';



export function Register(){

  // State to store form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });

  const [errorMessage, setErrorMessage] = useState('');

       // Handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

      // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

     // Simple validation
     if (!formData.name || !formData.email) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // You can add more validation like email format check, password length, etc.

    // If validation passes, clear the error and submit the form
    setErrorMessage('');

    console.log('Form Data:', formData);
    // You can add further form submission logic here (e.g., API calls)
    setFormData({ name: '', email: ''});
  };

    return (
      <div>
    <Binding name="Alice"/>
        <Container className="mt-5">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              <h2>Register form</h2>
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label >Name: </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="please enter name"
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="please enter email"
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
}