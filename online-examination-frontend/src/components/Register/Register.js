import React from 'react';
import {Form , Button} from 'react-bootstrap';
import './Register.css';
import {Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

class Register extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div class="d-flex justify-content-center">
                    <Form>
                    <h2 class="display-4">Create an account</h2>
                        <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <hr/>
                        <div className="link-texet">
                        <LinkContainer to="/login">
                        <Nav.Link>ALREADY HAVE A ACCOUNT? LOG IN</Nav.Link>
                        </LinkContainer>
                        </div>
                        <hr/>
                        <Button variant="warning" className="float-left" type="Cancel">
                            Cancel
                        </Button>
                        <Button variant="primary" className="float-right" type="submit">
                            Create
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Register;