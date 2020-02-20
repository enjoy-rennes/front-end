// DEPENDENCY
import Head from "next/head";
import React from "react";

// COMPONENT
import AppLayout from "../components/AppLayout";
import MapComponent from "../components/Map";

function MapPage() {
    return (
        <section className="map-page h-100">
            <Head>
                <meta name="description" content="Découvrez les aides financières, les aides au logement, les réductions et des moyens anti-gaspi autour de vous à Rennes." />
                <title>Enjoy Rennes - La Carte</title>
            </Head>

            <MapComponent />

        </section >
    );
}

export default AppLayout(MapPage);