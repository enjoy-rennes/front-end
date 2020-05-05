// DEPENDENCY
import Head from 'next/head';
import React from 'react';

// COMPONENT
import AppLayout from '../components/layout/AppLayout';
import MapContainer from '../containers/MapContainer';

function MapPage() {
    return (
        <section className='map-page'>
            <Head>
                <meta name='description' content='Découvrez les aides financières, les aides au logement, les réductions et des moyens anti-gaspi autour de vous à Rennes.' />
                <title>Enjoy Rennes - La Carte</title>
            </Head>

            <MapContainer />

        </section >
    );
}

export default AppLayout(MapPage);