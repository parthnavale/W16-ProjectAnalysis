import React from 'react';
import {Navbar,Nav,Image} from 'react-bootstrap';
import './Header.css';

function header(props) {
    return (
           <Navbar collapseOnSelect className="header-main-navbar" expand="lg" variant="light">
            <Image width={160} height={110} src="/image1.jpg"/>
            <Navbar.Brand className="header-main-heading" href="#home"><p>Online Examination System</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav.Link href="#home"><h4 className="linkText">Test-Takers</h4></Nav.Link>
                <Nav.Link href="#link"><h4 className="linkText">Institutions</h4></Nav.Link>
                <Nav.Link href="#home"><h4 className="linkText">Login</h4></Nav.Link>
                <Nav.Link href="#home"><h4 className="linkText">SignUp</h4></Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default header;