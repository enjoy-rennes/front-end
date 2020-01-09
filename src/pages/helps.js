import React from 'react';
import Head from 'next/head';
import HeadCommon from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HelpsComponent from '../components/Helps/Helps';

export default function Helps() {
    return (
        <div className="App">
            <HeadCommon />
            <Head>
                <meta name='description' content='Enjoy Rennes est une appli qui permet aux citoyens Rennais de trouver des aides financières, des réductions et des moyens anti-gaspi.' />
                <title>Enjoy Rennes - Calculer mes aides</title>
            </Head>

            <Header />
            <div className='Content text-center'>
                <h2>Calculer mes aides</h2>
                <HelpsComponent />
            </div>
            <Footer />
        </div >
    );
}