// DEPENDENCY
import React from "react";

// COMPONENT
import ContactFormComponent from "./form/ContactForm";
import RowLayout from "./layout/RowLayout";

export default class ContactComponent extends React.Component {
    render() {
        return (
            <div className="contact page">
                <RowLayout>
                    <ContactFormComponent />
                </RowLayout>
            </div>
        );
    }

}