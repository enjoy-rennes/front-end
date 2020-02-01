// DEPENDENCY
import React, { Component } from "react";
import { Layout } from 'antd';

import FooterComponent from "../components/Footer";
import SiderComponent from "./Sider";

const AppLayout = (ComposedComponent) => {
    class AppLayout extends Component {
        constructor() {
            super();
            this.state = {
                collapsed: false,
            }
        }

        handleCollapsedChange = collapsed => {
            this.setState({ collapsed });
        }

        render() {
            const { Content, Footer } = Layout;
            const { collapsed } = this.state;
            return (
                <Layout className="app vh-100">

                    <SiderComponent onCollapsedChange={this.handleCollapsedChange} />

                    <Content >
                        <ComposedComponent {...this.props} siderCollapsed={collapsed} />

                        <Footer>
                            <FooterComponent />
                        </Footer>

                    </Content>
                </Layout>
            );
        }
    }
    return AppLayout;
};

export default AppLayout;