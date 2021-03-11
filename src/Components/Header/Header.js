import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import banner from '../../Photo/banner.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand  as={Link} to="/" className='text-light'>Fantasy League</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home" className='text-light'>Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" className='text-light'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div >
        <img src={banner} alt="" style={{height:"500px", width:"100%"}}/>
        <div className="centered">
            <h1>Fantasy League</h1>
        </div>
        


        </div>
        </div>
    );
};

export default Header;