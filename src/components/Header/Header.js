import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand className='text-light' href='/'>Enjoy Rennes</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link className='text-light' href='/helps' >Calculer mes aides</Nav.Link>
                <Nav.Link className='text-light' href='/map'>La carte</Nav.Link>
                <Nav.Link className='text-light' href='/contact'>Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}