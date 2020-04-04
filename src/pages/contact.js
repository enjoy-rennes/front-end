// DEPENDENCY
import Head from 'next/head';
import React from 'react';

// COMPONENT
import AppLayout from '../components/layout/AppLayout';
import ContactComponent from '../components/Contact';

function ContactPage() {
    return (
        <section className='contact-page'>
            <Head>
                <meta name='description' content='Contacter Enjoy Rennes.' />
                <title>Enjoy Rennes - Contact</title>
            </Head>

            <ContactComponent />

        </section >
    );
}

export default AppLayout(ContactPage);