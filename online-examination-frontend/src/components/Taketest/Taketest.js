import React from 'react';
import { Jumbotron,Container,Image,Row,Col, Button } from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';

class Taketest extends React.Component{

    render() {
        return (
            <div className="mainDiv">
                <Jumbotron>
                    <Container>
                        <Row>
                    <Image src="icon1.png"/>{' '}
                        <h1>Fluid jumbotron</h1>
                        </Row >
                        <Row className="justify-content-between">
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                        <Button variant="warning">Warning</Button>
                        </Row>
                    </Container>
                </Jumbotron>
                <Jumbotron>
                    <Container>
                    <Row>
                    <Image src="icon1.png"/>{' '}
                        <h1>Fluid jumbotron</h1>
                        </Row >
                        <Row className="justify-content-between">
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                        <Button variant="warning">Warning</Button>
                        </Row>
                    </Container>
                </Jumbotron>
                <Jumbotron>
                    <Container>
                         <Row>
                    <Image src="icon1.png" className="mb-2"/>{' '}
                        <h1>Fluid jumbotron</h1>
                        </Row >
                        <Row className="justify-content-between">
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                        <Button variant="warning">Warning</Button>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Taketest;