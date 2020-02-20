// DEPENDENCY
import React from "react";
import Head from "next/head";
import Lottie from 'react-lottie'
import { Col, Layout, Row } from 'antd';

// COMPONENT
import HeaderComponent from "../components/Header";

// Assets
import animationData from '../../public/assets/error404.json'

function Error({ statusCode }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };
    const { Header, Content } = Layout;
    return (
        <div className="error-page">
            <Head>
                <meta name="referrer" content="no-referrer" />
                <meta name="robots" content="noindex" />
                <meta name="description" content="Page non trouvé." />
                <title>Enjoy Rennes - Erreur</title>
            </Head>

            <Layout className="bg-primary">

                <Header>
                    <HeaderComponent />
                </Header>

                <Content className="page">
                    <Row className="content" type="flex" justify="center" align="middle">
                        <Col>
                            {statusCode == 404 ?
                                <Lottie options={defaultOptions}
                                    height={400}
                                    width={800}
                                />
                                :
                                <span className="text-white">
                                    {statusCode
                                        ? "Erreur: " + statusCode
                                        : "Impossible d'afficher la page"}
                                </span>
                            }
                        </Col>

                    </Row>
                </Content>

            </Layout>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;