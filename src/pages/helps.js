// DEPENDENCY
import Head from 'next/head';
import React from 'react';

// COMPONENT
import AppLayout from '../components/layout/AppLayout';
import HelpsContainer from '../containers/HelpsContainer';

function HelpsPage() {
    return (
        <section className='helps-page'>
            <Head>
                <meta name='description' content='Découvrez les aides que vous pouvez bénéficier dès à présent.' />
                <title>Enjoy Rennes - Calculer mes aides</title>
            </Head>

            <HelpsContainer />

        </section >
    );
}

export default AppLayout(HelpsPage);