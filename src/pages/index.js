// DEPENDENCY
import Head from "next/head";
import React from "react";

// COMPONENT
import AppLayout from "../components/layout/AppLayout";
import HomeContainer from "../containers/HomeContainer";

const indexPage = () => {
    return (
        <section className="home-page">
            <Head>
                <meta name="description" content="Enjoy Rennes est une appli qui permet aux citoyens Rennais de trouver des aides financières, aides au logement, des réductions et des moyens anti-gaspi." />
                <title>Enjoy Rennes</title>
            </Head>

            <HomeContainer />

        </section >
    );
}

export default AppLayout(indexPage);