import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid={true} className="d-flex justify-content-around text-center align-items-center bg-light py-1 text-secondary">
            <span className='text-dark'>Enjoy Rennes 2020 - Tous droits réservés</span>
            <span className='text-dark'>
                Réalisé avec{' '}
                <span>❤</span>
                {' '}par Enjoy Rennes
            </span>
        </Container >
    );
}