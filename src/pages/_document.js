import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="fr">
                <Head >
                    <link rel="enjoy rennes icon" />
                    <meta charSet="utf-8" />
                    <meta name="application-name" content="Enjoy-Rennes" />
                    <meta name="keywords" content="enjoy, rennes, profiter, apprécier, réduction, promotion, découvrir, moins cher, aide, aide financière, logement, transport, anti-gaspi, anti-gaspillage, bon plan, carte" />
                    <meta name="referrer" content="no-referrer" />
                    <meta name="robots" content="follow" />
                    <meta name="theme-color" content="#000000" />
                </Head >
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument