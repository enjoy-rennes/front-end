// DEPENDENCY
import Head from "next/head";
import React from "react";

// COMPONENT
import AppLayout from "../components/AppLayout";
import ContactForm from "../components/ContactForm";

function ContactPage() {
    return (
        <section className="contact-page">
            <Head>
                <meta name="description" content="Contacter Enjoy Rennes." />
                <title>Enjoy Rennes - Contact</title>
            </Head>

            <section className="content">
                <h2>Contact</h2>
                <ContactForm />
            </section>

        </section >
    );
}

export default AppLayout(ContactPage);