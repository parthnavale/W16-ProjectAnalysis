import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../../App";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickedRegister: false,
      isClickedLogin: true,
    };
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        className="header-main-navbar"
        expand="lg"
        variant="light"
      >
        <div className="row col-md-12">
          <div className="col-md-10 col-sm-12 col-xs-12 col-lg-8 float-left">
            <LinkContainer to="/">
              <Navbar.Brand className="header-main-heading" href="#home">
                <p>Online Examination System</p>
              </Navbar.Brand>
            </LinkContainer>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12 col-lg-12 float-right">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="float-right">
              <LinkContainer to="/taketest">
                <Nav.Link>
                  <h4 className="linkText">Take Test</h4>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/scores">
                <Nav.Link>
                  <h4 className="linkText">Score Comparision</h4>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/institution">
                <Nav.Link>
                  <h4 className="linkText">Institutions</h4>
                </Nav.Link>
              </LinkContainer>

              <AuthContext.Consumer>
                {(context) => {
                  if (!context.isLoggedIn) {
                    return (
                      <React.Fragment>
                        <LinkContainer to="/login">
                          <Nav.Link>
                            <h4 className="linkText">Login</h4>
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                          <Nav.Link>
                            <h4 className="linkText">SignUp</h4>
                          </Nav.Link>
                        </LinkContainer>
                      </React.Fragment>
                    );
                  }
                  return (
                    <LinkContainer to="/">
                      <Nav.Link>
                        <h4
                          className="linkText"
                          onClick={() => {
                            context.clearAuth();
                          }}
                        >
                          Logout
                        </h4>
                      </Nav.Link>
                    </LinkContainer>
                  );
                }}
              </AuthContext.Consumer>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Header;
