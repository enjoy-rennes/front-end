// DEPENDENCY
import Head from "next/head";
import React from "react";
// COMPONENT
import AppLayout from "../components/AppLayout";
import MapComponent from "../components/Map";

function MapPage() {
    return (
        <div className="map-page page">
            <Head>
                <meta name="description" content="Découvrez les aides financières, les aides au logement, les réductions et des moyens anti-gaspi autour de vous à Rennes." />
                <title>Enjoy Rennes - La Carte</title>
            </Head>

            <div className="Content text-center">
                <h2>La carte</h2>
                <div className="d-flex justify-content-center">
                    <MapComponent />
                </div>
            </div>
        </div >
    );
}

export default AppLayout(MapPage);