import React from 'react';
import {Form , Button} from 'react-bootstrap';
import './Login.css';

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
                        <h6 className="link-text">CREATE AN ACCOUNT</h6>
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