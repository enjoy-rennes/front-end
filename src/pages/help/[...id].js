// DEPENDENCY
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router'

// COMPONENT
import AppLayout from '../../components/layout/AppLayout';
import HelpContainer from '../../containers/HelpContainer';

function HelpPage() {
    const router = useRouter()
    const slug = router.query.id || []
    const id = slug[0];
    return (
        <section className='help-page'>
            <Head>
                <meta name='description' content='Découvrez les aides que vous pouvez bénéficier dès à présent.' />
                <title>Enjoy Rennes - Aide</title>
            </Head>

            <HelpContainer id={id} />

        </section >
    );
}

export default AppLayout(HelpPage);