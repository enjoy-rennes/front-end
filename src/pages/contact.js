import React from 'react';
import Head from 'next/head';
import HeadCommon from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
    return (
        <div className="App">
            <HeadCommon />
            <Head>
                <meta name='description' content='Contacter Enjoy Rennes.' />
                <title>Enjoy Rennes - Contact</title>
            </Head>

            <Header />
            <div className='Content text-center'>
                <h2>Contact</h2>
                <ContactForm />
            </div>
            <Footer />
        </div >
    );
}