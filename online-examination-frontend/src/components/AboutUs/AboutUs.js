import React from 'react';
import "./AboutUs.css";
import { Container, Row,Col,Image} from 'react-bootstrap';


const AboutUs = () =>{
    return(
        <Container>
        <Row lg={2} >
          <Col className="image-icon">
            <Image src="institute.PNG" />
          </Col>
          <Col className="about1">    
            <h1>Accepted by thousands of universities worldwide</h1>
            <br/>
            <p>
              The Duolingo English Test is used by leading institutions around the world.
              The practice exam and the actual test and rapid turnaround allow for dynamic use throughout the admissions cycle.
            </p>
          </Col>
          </Row>

          <Row lg={2} >
          <Col className="about1">    
            <h1 className="rapidTurnaround">Rapid turnaround</h1>
            <br/>
            <p>
              Receive the information you need, when you need it. 
              Applicants are able to take the test online without an appointment, and certified results are available within 48 hours.            
            </p>
          </Col>
          <Col className="image-icon">
            <Image src="result.PNG" />
          </Col>
          </Row>

          <br/><br/><h2>On demand, anywhere in the world</h2><br/><br/>

          <Row lg={3} >
          <Col className="col1">
            <Image className="img1" src="icon5.PNG" /><br/><br/>
            <p className="paraHeading">Convenient</p>
            <p>Take the test online anywhere, anytime—no traveling to a test center or appointment needed</p>
          </Col>
          <Col className="col1">
            <Image className="img1" src="icon6.PNG" /><br/><br/>
            <p className="paraHeading">Fast</p>
            <p>Get your results within 48 hours of completing the test, and share it with anyone, immediately</p>      
          </Col>
          <Col className="col1"> 
            <Image className="img1" src="icon4.PNG" /><br/><br/>
            <p className="paraHeading">Affordable</p>
            <p>Receive your score for only $49, while most other certification tests cost over $200</p>      
          </Col>
          </Row>
          <br/><br/>
        </Container>
    );
}

export default AboutUs;