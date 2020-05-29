// DEPENDENCY
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router'

// COMPONENT
import AppLayout from '../../components/layout/AppLayout';
import GoodPlanContainer from '../../containers/GoodPlanContainer';

function HelpPage() {
    const router = useRouter()
    const slug = router.query.id || []
    const id = slug[0];
    return (
        <section className='help-page'>
            <Head>
                <meta name='description' content='Découvrez les bons plans à Rennes.' />
                <title>Enjoy Rennes - Bon Plan</title>
            </Head>

            <GoodPlanContainer id={id} />

        </section >
    );
}

export default AppLayout(HelpPage);