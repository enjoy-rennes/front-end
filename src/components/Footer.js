// DEPENDENCY
import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// ASSET
import Logo from './Logo';

// COMPONENT
import RowLayout from './layout/RowLayout';

export default class FooterComponent extends React.Component {

    render() {
        return (
            <Row className='footer'>
                <Col>
                    <Link href='/'>
                        <a rel='noopener noreferrer' >
                            <div className='no-white-space'>
                                <span style={{ color: 'white' }}>Nous contacter</span>
                            </div>
                        </a>
                    </Link>
                </Col>

                <Col>
                    <Row className='network' type='flex' justify='center' align='middle'>
                        <a target='_blank' href='//www.facebook.com/EnjoyRennes' rel='noopener noreferrer'>
                            <FaFacebookF className='footer-icon' />
                        </a>

                        <a target='_blank' href='//www.twitter.com/EnjoyRennes' rel='noopener noreferrer'>
                            <FaTwitter className='footer-icon' />
                        </a>

                        <a target='_blank' href='//www.linkedin.com/company/enjoy-rennes' rel='noopener noreferrer'>
                            <FaLinkedinIn className='footer-icon' />
                        </a>

                        <a target='_blank' href='//www.instagram.com/enjoyrennes' rel='noopener noreferrer'>
                            <FaInstagram className='footer-icon' />
                        </a>
                    </Row>
                </Col>

            </Row >
        )
    }
}

