// DEPENDENCY
import { Col, Row } from 'antd';
import React from 'react';

// ASSET
import logo from '../../public/assets/logo/logo.png';

export default class LogoComponent extends React.Component {

    render() {
        return (
            <Row className='logo' type='flex' justify='center' align='middle'>
                <Col>
                    <img src={logo} />
                </Col>
            </Row>
        )
    }
}

