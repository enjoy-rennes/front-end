// DEPENDENCY
import React, { Component } from "react";
import { Layout } from 'antd';

import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

const AppLayout = (ComposedComponent) => {
    class AppLayout extends Component {
        render() {
            const { Header, Content, Footer } = Layout;

            return (
                <Layout className="app">

                    <Header className="header">
                        <HeaderComponent />
                    </Header>

                    <Content >
                        <ComposedComponent {...this.props} />
                    </Content>

                    <Footer>
                        <FooterComponent />
                    </Footer>
                </Layout>
            );
        }
    }
    return AppLayout;
};

export default AppLayout;