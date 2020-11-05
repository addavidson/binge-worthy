import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <header>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/binge-worthy/">Binge-Worthy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/binge-worthy/">Home</Nav.Link>
                        <Nav.Link href="/binge-worthy/about/">About</Nav.Link>
                        <Nav.Link href="/binge-worthy/favourites/">Favourites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </header>
        );
     }
}

export default Header;