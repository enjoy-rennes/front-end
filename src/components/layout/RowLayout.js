// DEPENDENCY
import React from "react";
import { Row } from "antd";

export default class RowLayout extends React.Component {
    render() {
        const { props } = this;
        const { children } = props;
        return (
            <Row {...props} type="flex" justify="center" align="middle">
                {children}
            </Row>
        );
    }
}