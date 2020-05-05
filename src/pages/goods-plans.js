// DEPENDENCY
import Head from 'next/head';
import React from 'react';

// COMPONENT
import AppLayout from '../components/layout/AppLayout';
import GoodsPlansContainer from '../containers/GoodsPlansContainer';

function GoodsPlansPage() {
    return (
        <section className='goods-plans-page'>
            <Head>
                <meta name='description' content='Découvrez les bons plans à Rennes.' />
                <title>Enjoy Rennes - Bon plan</title>
            </Head>

            <GoodsPlansContainer />

        </section >
    );
}

export default AppLayout(GoodsPlansPage);