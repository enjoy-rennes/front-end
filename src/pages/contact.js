// DEPENDENCY
import Head from "next/head";
import React from "react";
import { Layout } from 'antd';

// COMPONENT
import AppLayout from "../components/AppLayout";
import ContactForm from "../components/ContactForm";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

const { Header, Content, Footer } = Layout;

function ContactPage() {
    return (
        <Layout className="contact-page">
            <Header className="header">
                <Head>
                    <meta name="description" content="Contacter Enjoy Rennes." />
                    <title>Enjoy Rennes - Contact</title>
                </Head>
                <HeaderComponent pathName="contact" />
            </Header>

            <Content className="content">
                <h2>Contact</h2>
                <ContactForm />
            </Content>

            <Footer>
                <FooterComponent />
            </Footer>
        </Layout >
    );
}

export default AppLayout(ContactPage);