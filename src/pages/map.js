// DEPENDENCY
import Head from "next/head";
import React from "react";
import { Layout } from 'antd';

// COMPONENT
import AppLayout from "../components/AppLayout";
import MapComponent from "../components/Map";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

const { Header, Content, Footer } = Layout;

function MapPage() {
    return (
        <Layout className="map-page">
            <Header className="header">
                <Head>
                    <meta name="description" content="Découvrez les aides financières, les aides au logement, les réductions et des moyens anti-gaspi autour de vous à Rennes." />
                    <title>Enjoy Rennes - La Carte</title>
                </Head>
                <HeaderComponent pathName="map" />
            </Header>

            <Content className="content">
                <h2>La carte</h2>
                <div >
                    <MapComponent />
                </div>
            </Content>

            <Footer>
                <FooterComponent />
            </Footer>
        </Layout >
    );
}

export default AppLayout(MapPage);