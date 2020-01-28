// DEPENDENCY
import Head from "next/head";
import React from "react";
import { Layout } from 'antd';

// COMPONENT
import AppLayout from "../components/AppLayout";
import MapComponent from "../components/Map";

function MapPage() {
    return (
        <section className="map-page">
            <Head>
                <meta name="description" content="Découvrez les aides financières, les aides au logement, les réductions et des moyens anti-gaspi autour de vous à Rennes." />
                <title>Enjoy Rennes - La Carte</title>
            </Head>

            <section className="content">
                <h2>La carte</h2>
                <MapComponent />
            </section>

        </section >
    );
}

export default AppLayout(MapPage);