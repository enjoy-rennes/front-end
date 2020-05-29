// DEPENDENCY
import React from 'react';
import { Col, Row } from 'antd';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default class FooterComponent extends React.Component {

    render() {

        const aStyle = {
            lineHeight: 'normal',
            margin: 'auto',
        };

        return (
            <Row className='footer'>
                <Col>
                    <a rel='noopener noreferrer' href="mailto:alexis.pannetier@hotmail.fr">
                        Nous contacter
                    </a>
                </Col>

                <Col>
                    <a target='_blank' style={aStyle} href='//www.facebook.com/EnjoyRennes' rel='noopener noreferrer' name='facebook'>
                        <FaFacebookF className='footer-icon' />
                    </a>

                    <a target='_blank' style={aStyle} href='//www.twitter.com/EnjoyRennes' rel='noopener noreferrer' name='twitter'>
                        <FaTwitter className='footer-icon' />
                    </a>

                    <a target='_blank' style={aStyle} href='//www.linkedin.com/company/enjoy-rennes' rel='noopener noreferrer' name='linkedin'>
                        <FaLinkedinIn className='footer-icon' />
                    </a>

                    <a target='_blank' style={aStyle} href='//www.instagram.com/enjoyrennes' rel='noopener noreferrer' name='instagram'>
                        <FaInstagram className='footer-icon' />
                    </a>
                </Col>

            </Row >
        )
    }
}

