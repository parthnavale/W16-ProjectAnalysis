import React from 'react';
import "./Main.css";
import { Container, Row,Col,Image,Navbar, Button } from 'react-bootstrap';


const Main = () =>{
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
            <Button className="button1" style={{ color: "white", background: "#F56F08", border: "0px #F56F08"}} size="lg">TAKE A TEST</Button>
          </Col>
          </Row>
        </Container>
    );
}

export default Main;