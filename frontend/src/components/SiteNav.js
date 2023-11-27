import React from 'react';

import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function SiteNav(props) {

    const handleLogout = () => {
        props.logOut();
    }

    return (
    
        <header>
        <Navbar bg="dark" expand="lg" variant="dark" style={{ backgroundColor: '#17a2b8', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '10px 0' }}>
            <Container>
                <Navbar.Brand style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#ffffff' }}>
                    <Nav.Link href="/" style={{ color: '#ffffff' }}>Slash</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-md-auto" style={{ fontSize: '1.1em' }}>
                        <Nav.Link href="/wishlist" style={{ color: '#ffffff', fontWeight: '500' }}>Wishlist</Nav.Link>
                        <Nav.Link onClick={handleLogout} style={{ color: '#ffffff', fontWeight: '500' }}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    )
}

export default SiteNav;