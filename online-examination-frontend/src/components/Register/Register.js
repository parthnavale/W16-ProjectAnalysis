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
                    <h2 className="createAccount">Create an account</h2>
                        <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter address" />
                        </Form.Group>
                        <Form.Group controlId="formDOB">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" />
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

                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" className="myImage" />
                        </Form.Group>
                        <hr/>
                        <LinkContainer to="/login">
                        <Nav.Link className="link-texet">ALREADY HAVE A ACCOUNT? LOG IN</Nav.Link>
                        </LinkContainer>
                        <hr/>

                       

                        <Button className="float-left" type="Cancel">
                            Cancel
                        </Button>
                        <Button className="float-right" type="submit">
                            Create
                        </Button> 
                    </Form>
                </div>
            </div>
        );
    }
}

export default Register;