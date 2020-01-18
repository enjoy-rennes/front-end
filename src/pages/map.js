import React from "react";
import Head from "next/head";
import HeadCommon from "../components/Head/Head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MapComponent from "../components/Map/Map";

export default function Map() {
    return (
        <div className="App">
            <HeadCommon />
            <Head>
                <meta name="description" content="Découvrez les aides financières, les aides au logement, les réductions et des moyens anti-gaspi autour de vous à Rennes." />
                <title>Enjoy Rennes - La Carte</title>
            </Head>

            <Header />
            <div className="Content text-center">
                <h2>La carte</h2>
                <div className="d-flex justify-content-center">
                    <MapComponent />
                </div>
            </div>
            <Footer />
        </div >
    );
}