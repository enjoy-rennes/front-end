// DEPENDENCY
import React from 'react';
import { Col } from 'antd';

export default class ColLayout extends React.Component {
    render() {
        const { props } = this;
        const { children } = props;
        return (
            <Col {...props} sm={22} md={20}>
                {children}
            </Col>
        );
    }
}