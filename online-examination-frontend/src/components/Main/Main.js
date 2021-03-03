import React from 'react';
import "./Main.css";
import { Container, Row,Col,Image,Navbar, Button,Nav } from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';

class Main extends React.Component{
  render(){
    return(
        <Container>
        <Row lg={2}>
          <Col>
            <Image src="image2.jpg" />
          </Col>
          <Col>    
            <h1><br/>Certify your English proficiency today</h1>
            <br/>
                <Image src="icon1.png"/>
                <Navbar.Brand>
                <p>Take the test online anytime, anywhere</p>
                </Navbar.Brand>
            <br/>
                <Image src="icon2.png"/>
                <Navbar.Brand>
                <p>Finish in 1 hour and get results in 2 days</p>
                </Navbar.Brand>
            <br/>
                <Image src="icon3.png"/>
                <Navbar.Brand>
                <p>Accepted by over 3000 institutions</p>
                </Navbar.Brand>
            <br/><br/>
            <LinkContainer to="/taketest">
              <Nav.Link>
                <Button className="button1"  style={{ color: "white", background: "#F56F08", border: "0px #F56F08"}} size="lg">TAKE A TEST</Button>
            </Nav.Link>
            </LinkContainer>
          </Col>
          </Row>
        </Container>
    )};
}

export default Main;