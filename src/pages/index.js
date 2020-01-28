// DEPENDENCY
import Head from "next/head";
import React from "react";
import { Layout } from 'antd';

// COMPONENT
import AppLayout from "../components/AppLayout";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";
import HomeComponent from "../components/Home";

const { Header, Content, Footer } = Layout;

const indexPage = () => {
    return (
        <Layout className="home-page">
            <Head>
                <meta name="description" content="Enjoy Rennes est une appli qui permet aux citoyens Rennais de trouver des aides financières, aides au logement, des réductions et des moyens anti-gaspi." />
                <title>Enjoy Rennes</title>
            </Head>
            <Header className="header">
                <HeaderComponent pathName="home" />
            </Header>

            <Content className="content">
                <HomeComponent />
            </Content>

            <Footer>
                <FooterComponent />
            </Footer>
        </Layout >
    );
}

export default AppLayout(indexPage);