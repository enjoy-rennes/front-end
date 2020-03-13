// DEPENDENCY
import React from "react";
import { Col, Row } from "antd";

export default class RowContent extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Row {...this.props} className="content" type="flex" justify="center" align="middle">
                <Col sm={22} md={20}>
                    {children}
                </Col>
            </Row>
        );
    }
}