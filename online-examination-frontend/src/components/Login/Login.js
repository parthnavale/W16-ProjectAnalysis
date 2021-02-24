import React from 'react';
import {Form , Button} from 'react-bootstrap';
import './Login.css';
import {Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

class Login extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div class="d-flex justify-content-center">
                    <Form>
                    <h2 class="display-4">Login</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <hr/>
                        <div className="link-text">
                        <LinkContainer to="/register">
                        <Nav.Link>CREATE AN ACCOUNT? SIGN UP
                        </Nav.Link>
                        </LinkContainer>
                        </div>
                        <hr/>
                        <Button variant="primary" className="float-right" type="submit">
                            Submit
                        </Button>
                        <Button variant="warning" className="float-left" type="Cancel">
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;