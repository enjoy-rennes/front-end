import React from 'react';
import Head from 'next/head';
import HeadCommon from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MapComponent from '../components/Map/Map';

export default function Map() {
    return (
        <div className="App">
            <HeadCommon />
            <Head>
                <meta name='description' content='Enjoy Rennes est une appli qui permet aux citoyens Rennais de trouver des aides financières, des réductions et des moyens anti-gaspi.' />
                <title>Enjoy Rennes - La Carte</title>
            </Head>

            <Header />
            <div className='Content text-center'>
                <h2>La carte</h2>
                <MapComponent />
            </div>
            <Footer />
        </div >
    );
}