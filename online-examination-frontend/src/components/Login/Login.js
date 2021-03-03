import React from 'react';
import {Form , Button, Nav} from 'react-bootstrap';
import './Login.css';
import {LinkContainer} from 'react-router-bootstrap';
import {Redirect} from 'react-router-dom';

const initialState = {
    email: "",
    password: "",
    redirect: false
  };

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = { ...initialState };
      }
    
      handleChange(e) {
        const { id, value } = e.target;
        this.setState((prevState) => ({
          ...prevState,
          [id]: value
        }));
      }
      onSubmit() {
        fetch("http://localhost:8000/api/auth/login", {
          method: "post",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(
            (result) => {
              if (result && result.length>0) {
                this.setState((prevState) => ({
                    ...prevState,
                    redirect: true
                  }),()=>{
                      alert("Successfully login!!.");  
                  });   
              }
              else{
                  alert("Incorrect email or password!.");
              }
            },
            (error) => {
              console.error(error);
            }
          );
      }

    render(){
        const {
            email,
            password,
            redirect            
          } = this.state;
          if (redirect) {
            return <Redirect to='/'/>;
          }
             
        return(
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <Form className="form1">
                    <h2 className="display-3">Login</h2>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"   id="email"
                             value={email}
                             onChange={(e) => this.handleChange(e)} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="password"
                             value={password}
                             onChange={(e) => this.handleChange(e)} required />
                        </Form.Group>
                        <hr/>
                        <LinkContainer to="/register">
                        <Nav.Link className="link-text">CREATE AN ACCOUNT? SIGN UP
                        </Nav.Link>
                        </LinkContainer>
                        <hr/>
                        <Button style={{ color: "white", background: "#F56F08", border: "0px #F56F08"}} className="float-right" type="button" onClick={() => {this.onSubmit(); }} 
                            disabled={!(email.length>0 && password.length>0)}>
                            Submit
                        </Button>
                        
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;