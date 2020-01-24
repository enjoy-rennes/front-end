// DEPENDENCY
import Head from "next/head";
import React from "react";
// COMPONENT
import AppLayout from "../components/AppLayout";
import ContactForm from "../components/ContactForm";

function ContactPage() {
    return (
        <div className="contact-page page">
            <Head>
                <meta name="description" content="Contacter Enjoy Rennes." />
                <title>Enjoy Rennes - Contact</title>
            </Head>

            <div className="Content text-center">
                <h2>Contact</h2>
                <ContactForm />
            </div>
        </div >
    );
}

export default AppLayout(ContactPage);