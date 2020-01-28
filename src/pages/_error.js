// DEPENDENCY
import React from "react";
import Head from "next/head";
import { Layout } from 'antd';

// COMPONENT
import AppLayout from "../components/AppLayout";
import Error404Component from "../components/Error404";

function Error({ statusCode }) {
    return (
        <section className="error-page">
            <Head>
                <meta name="referrer" content="no-referrer" />
                <meta name="robots" content="noindex" />
                <meta name="description" content="Page non trouvé." />
                <title>Enjoy Rennes - Erreur</title>
            </Head>

            <p>
                {statusCode
                    ? `Erreur : ${statusCode}`
                    : "Une erreur s'est produite"}
            </p>
            {statusCode == 404
                ? <Error404Component />
                : ""}

        </section >
    )
}

export default AppLayout(Error);

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
