// DEPENDENCY
import { Gradient } from 'react-gradient';
import Head from "next/head";
import React from "react";
// COMPONENT
import AppLayout from '../components/AppLayout';

const gradients = [
    ['#bd19d6', '#ea7d10'],
    // ['#ff2121', '#25c668'],
];

const HomePage = () => {
    return (
        <div className="home-page page">
            <Head>
                <meta name="description" content="Enjoy Rennes est une appli qui permet aux citoyens Rennais de trouver des aides financières, aides au logement, des réductions et des moyens anti-gaspi." />
                <title>Enjoy Rennes</title>
            </Head>

            <Gradient
                className="d-flex text-center h-100"
                gradients={gradients} // required
                property="background"
                // duration={3000}
                angle="45deg" >

                <span className="align-self-center" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "48px", textAlign: "left" }}>Retrouver rapidement les <span style={{ color: "purple" }}>bons plans</span> de la ville de Rennes</span>
            </Gradient>
        </div >
    );
}

export default AppLayout(HomePage);