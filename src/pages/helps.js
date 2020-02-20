// DEPENDENCY
import Head from "next/head";
import React from "react";

// COMPONENT
import AppLayout from "../components/AppLayout";
import HelpsComponent from "../components/Helps";

function HelpsPage() {
    return (
        <section className="helps-page h-100">
            <Head>
                <meta name="description" content="Découvrez les aides que vous pouvez bénéficier dès à présent." />
                <title>Enjoy Rennes - Calculer mes aides</title>
            </Head>

            <HelpsComponent />

        </section >
    );
}

export default AppLayout(HelpsPage);