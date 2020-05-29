// DEPENDENCY
import React from 'react';
import { Col, Row } from 'antd';

// COMPONENTS
import RowLayout from '../layout/RowLayout';

export default class HelpDetailModel extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div className='help-container page'>
                <Row>
                    <Col xs={24} sm={12} lg={12} >
                        <h1>{data.name}</h1>
                    </Col>

                    <Col xs={24} sm={12} lg={12} className='bg-light'>

                    </Col>
                    {data.description}
                </Row>
            </div>
        );
    }
}