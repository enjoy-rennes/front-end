import React from 'react';
import Head from 'next/head';
import HeadCommon from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Contact() {
    return (
        <div className="App">
            <HeadCommon />
            <Head>
                <meta name='description' content='Enjoy Rennes est une appli qui permet aux citoyens Rennais de trouver des aides financières, des réductions et des moyens anti-gaspi.' />
                <title>Enjoy Rennes - Contact</title>
            </Head>

            <Header />
            <div className='Content text-center'>
                <h2>Contact</h2>
            </div>
            <Footer />
        </div >
    );
}