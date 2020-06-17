// DEPENDENCY
import React from 'react';
import { Col, Row } from 'antd';

// COMPONENTS
import RowLayout from '../layout/RowLayout';

export default class GoodPlanDetailModel extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div className='good-plan-container page'>
                <Row>
                    <Col sm={24} md={12} style={{ padding: '24px' }}>
                        <RowLayout style={{ textAlign: 'center' }}>
                            <h1>{data.name}</h1>
                        </RowLayout>
                    </Col>

                    <Col sm={24} md={12} className='bg-primary'>

                    </Col>
                </Row>

                <RowLayout style={{ padding: '64px' }}>
                    {data.description}
                </RowLayout>
            </div>
        );
    }
}