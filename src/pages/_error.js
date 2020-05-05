// DEPENDENCY
import React from 'react';
import Head from 'next/head';
import Lottie from 'react-lottie'
import { Col, Layout, Row } from 'antd';

// COMPONENT
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import RowLayout from '../components/layout/RowLayout'

// Assets
import animationData from '../../public/assets/error404.json'

function Error({ statusCode }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };
    const { Content, Footer, Header } = Layout;
    return (
        <div className='error-page'>
            <Head>
                <meta name='referrer' content='no-referrer' />
                <meta name='robots' content='noindex' />
                <meta name='description' content='Page non trouvé.' />
                <title>Enjoy Rennes - Erreur</title>
            </Head>

            <Layout>

                <Header>
                    <HeaderComponent />
                </Header>

                <Content className='page'>
                    <RowLayout>
                        <Col>
                            {statusCode == 404 ?
                                <Lottie options={defaultOptions}
                                    height={400}
                                    width={800}
                                />
                                :
                                <span className='text-white'>
                                    {statusCode
                                        ? 'Erreur: ' + statusCode
                                        : "Impossible d'afficher la page"}
                                </span>
                            }
                        </Col>
                    </RowLayout>
                </Content>

                <Footer>
                    <FooterComponent />
                </Footer>

            </Layout>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;