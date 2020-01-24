// DEPENDENCY
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {

    return (
        <Navbar className="header" bg="dark" variant="dark">
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/helps" >Calculer mes aides</Nav.Link>
                <Nav.Link href="/map">La carte</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}