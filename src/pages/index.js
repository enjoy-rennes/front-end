// DEPENDENCY
import Head from "next/head";
import React from "react";

// COMPONENT
import AppLayout from "../components/AppLayout";
import HomeComponent from "../components/Home";

const indexPage = () => {
    return (
        <section className="home-page">
            <Head>
                <meta name="description" content="Enjoy Rennes est une appli qui permet aux citoyens Rennais de trouver des aides financières, aides au logement, des réductions et des moyens anti-gaspi." />
                <title>Enjoy Rennes</title>
            </Head>

            <HomeComponent />

        </section >
    );
}

export default AppLayout(indexPage);