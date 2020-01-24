// DEPENDENCY
import Head from "next/head";
import React from "react";
// COMPONENT
import AppLayout from '../components/AppLayout';
import HelpsComponent from "../components/Helps";

function HelpsPage() {
    return (
        <div className="helps-page page">
            <Head>
                <meta name="description" content="Découvrez les aides que vous pouvez bénéficier dès à présent." />
                <title>Enjoy Rennes - Calculer mes aides</title>
            </Head>

            <div className="Content text-center">
                <h2>Calculer mes aides</h2>
                <HelpsComponent />
            </div>
        </div >
    );
}

export default AppLayout(HelpsPage);