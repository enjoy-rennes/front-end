// DEPENDENCY
import React from "react";
import { Layout } from "antd";

import MenuComponent from "../components/Menu";

export default class SiderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        }
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
        this.props.onCollapsedChange(collapsed);
    };

    render() {
        const { Sider } = Layout;
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
                <div className="logo" />
                <MenuComponent />
            </Sider>
        )
    }
}

