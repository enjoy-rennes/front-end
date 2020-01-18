import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Error404Component from "../components/Error/Error404";

export default function Error({ statusCode }) {
    return (
        <div className="App">
            <Head>
                <link rel="enjoy rennes icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
                <meta charSet="utf-8" />
                <meta name="application-name" content="Enjoy-Rennes"></meta>
                <meta name="referrer" content="no-referrer" />
                <meta name="robots" content="noindex" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Page non trouvé." />
                <title>Enjoy Rennes - Erreur</title>
            </Head>
            <Header />
            <div className="Content text-center">
                <p>
                    {statusCode
                        ? `Erreur : ${statusCode}`
                        : "Une erreur s\"est produite"}
                </p>
                {statusCode == 404
                    ? <Error404Component />
                    : ""}

            </div>
            <Footer />
        </div >

    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
