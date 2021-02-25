import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  image: "",
  dateOfBirth: "",
};
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  render() {
    const {
      name,
      address,
      email,
      password,
      confirmPassword,
      image,
      dateOfBirth,
    } = this.state;
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <Form>
            <h2 className="createAccount">Create an account</h2>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={name}
                onChange={(e) => this.handleChange(e)}
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="textarea"
                id="address"
                value={address}
                onChange={(e) => this.handleChange(e)}
                placeholder="Enter address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                value={email}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                className="myImage"
                id="image"
                value={image}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <hr />
            <LinkContainer to="/login">
              <Nav.Link className="link-texet">
                ALREADY HAVE A ACCOUNT? LOG IN
              </Nav.Link>
            </LinkContainer>
            <hr />

            <Button
              className="float-left"
              type="reset"
              onClick={() => {
                this.setState({
                  ...initialState,
                });
              }}
            >
              Reset
            </Button>
            <Button
              className="float-right"
              type="button"
              onClick={() => {
                debugger;
                fetch("http://localhost:8000/api/auth/signup", {
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
                      if (result) {
                        alert("Successfully signed up!!.");
                        this.setState({
                          ...initialState,
                        });
                      }
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
              }}
            >
              Create
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
