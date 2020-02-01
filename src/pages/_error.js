// DEPENDENCY
import React from "react";
import Head from "next/head";
import Lottie from 'react-lottie'
import { Layout, Row } from 'antd';
import animationData from '../../public/assets/error404.json'

// COMPONENT
import FooterComponent from "../components/Footer";
import SiderComponent from "../components/Sider";

function Error({ statusCode }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };
    const { Header, Content, Footer } = Layout;
    return (
        <Layout className="error-page vh-100">
            <Head>
                <meta name="referrer" content="no-referrer" />
                <meta name="robots" content="noindex" />
                <meta name="description" content="Page non trouvé." />
                <title>Enjoy Rennes - Erreur</title>
            </Head>

            <SiderComponent />

            <Content>
                <Row type="flex" justify="center">
                    <span>
                        {statusCode
                            ? "Erreur: " + statusCode
                            : "Impossible d'afficher la page"}
                    </span>
                </Row>
                {statusCode == 404 &&
                    <Lottie options={defaultOptions}
                        height={400}
                        width={800}
                    />
                }

                <Footer>
                    <FooterComponent />
                </Footer>

            </Content>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;