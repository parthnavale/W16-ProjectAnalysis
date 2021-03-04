import React from "react";
import { Redirect } from "react-router-dom";
import { Jumbotron, Image, Row, Col, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Taketest.css";
import { AuthContext } from "../../App";

class Taketest extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          if (!context.isLoggedIn) {
            return <Redirect to="/login" />;
          }
          return (
            <div className="mainDiv">
              <Jumbotron className="design-layout" id="row1">
                <Row lg={3}>
                  <Col>
                    <Image className="allImg" src="practice.png" />{" "}
                  </Col>
                  <Col className="col11">
                    <h1 className="headingTest">Try the test</h1>
                    <p>
                      Practice as much as you want.
                      <br />
                      <p className="paraQues">10 ques</p>
                    </p>
                  </Col>
                  <Col>
                    <LinkContainer to="/practice">
                      <Nav.Link>
                        <Button>Practice Test</Button>
                      </Nav.Link>
                    </LinkContainer>
                  </Col>
                </Row>
              </Jumbotron>
              <Jumbotron className="design-layout" id="row2">
                <Row lg={3}>
                  <Col>
                    <Image className="allImg" src="buy.png" />{" "}
                  </Col>
                  <Col className="col11">
                    <h1 className="headingTest">Purchase the test</h1>
                    <p>
                      Buy the test and take it whenever you're ready.
                      <br />
                      <p className="paraQues">$50 CAD</p>
                    </p>
                  </Col>
                  <Col>
                    <LinkContainer to="/buytest">
                      <Nav.Link>
                        <Button id="btnBuy">Buy now</Button>
                      </Nav.Link>
                    </LinkContainer>
                  </Col>
                </Row>
              </Jumbotron>
              <Jumbotron className="design-layout" id="row3">
                <Row lg={3}>
                  <Col>
                    <Image className="allImg" src="icon5.png" />{" "}
                  </Col>
                  <Col className="col11">
                    <h1 className="headingTest">Take the test</h1>
                    <p>
                      Anytime, anywhere. Get results within 7 days.
                      <br />
                      <p className="paraQues">25 ques</p>
                    </p>
                  </Col>
                  <Col>
                    {" "}
                    <Button>Take the Test</Button>
                  </Col>
                </Row>
              </Jumbotron>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Taketest;
