// DEPENDENCY
import React, { Component } from 'react';
import { Layout } from 'antd';

// COMPONENT
import HeaderComponent from '../Header';
import FooterComponent from '../Footer';

const AppLayout = (ComposedComponent) => {
    class AppLayout extends Component {

        render() {
            const { Content, Footer, Header } = Layout;

            return (
                <Layout className='app-layout'>
                    <Header>
                        <HeaderComponent />
                    </Header>

                    <Content >
                        <ComposedComponent />
                    </Content>

                    <Footer>
                        <FooterComponent />
                    </Footer>
                </Layout >
            );
        }
    }
    return AppLayout;
};

export default AppLayout;