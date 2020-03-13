// DEPENDENCY
import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "./Header";

const AppLayout = (ComposedComponent) => {
    class AppLayout extends Component {

        render() {
            const { Content, Header } = Layout;

            return (
                <Layout className="app-layout">
                    <Header>
                        <HeaderComponent />
                    </Header>

                    <Content >
                        <ComposedComponent />
                    </Content>
                </Layout >
            );
        }
    }
    return AppLayout;
};

export default AppLayout;