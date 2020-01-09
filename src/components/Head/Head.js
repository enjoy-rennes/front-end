import React from 'react';
import Head from 'next/head';

export default function HeadCommon() {
    return (
        <div className='App'>
            <Head>
                <meta charset='utf-8' />
                <link rel='enjoy rennes icon' href='/favicon.ico' />
                <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh' crossorigin='anonymous' />
                <meta name='application-name' content='Enjoy-Rennes'></meta>
                <meta name='keywords' content='enjoy, rennes, profiter, apprécier, réduction, promotion, découvrir, moins cher, aide, aide financière, logement, transport, anti-gaspi, anti-gaspillage, bon plan, carte'></meta>
                <meta name='referrer' content='no-referrer' />
                <meta name='robots' content='follow' />
                <meta name='theme-color' content='#000000' />
            </Head>

        </div>
    );
}