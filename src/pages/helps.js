// DEPENDENCY
import Head from "next/head";
import React from "react";
import { Layout } from 'antd';

// COMPONENT
import AppLayout from "../components/AppLayout";
import HelpsComponent from "../components/Helps";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

const { Header, Content, Footer } = Layout;

function HelpsPage() {
    return (
        <Layout className="helps-page">
            <Header className="header">
                <Head>
                    <meta name="description" content="Découvrez les aides que vous pouvez bénéficier dès à présent." />
                    <title>Enjoy Rennes - Calculer mes aides</title>
                </Head>
                <HeaderComponent pathName="helps" />
            </Header>

            <Content className="content">
                <h2>Calculer mes aides</h2>
                <HelpsComponent />
            </Content>

            <Footer>
                <FooterComponent />
            </Footer>
        </Layout >
    );
}

export default AppLayout(HelpsPage);