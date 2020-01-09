import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <div id="header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Enjoy Rennes</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/helps">Calculer mes aides</Nav.Link>
                    <Nav.Link href="/map">La carte</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}