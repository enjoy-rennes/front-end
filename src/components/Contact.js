// DEPENDENCY
import React from "react";
import { Row } from "antd";

// COMPONENT
import ContactFormComponent from "./form/ContactForm";
import RowContent from "./RowContent";

export default class ContactComponent extends React.Component {
    render() {
        return (
            <div className="contact page">
                <RowContent className="content">
                    <ContactFormComponent />
                </RowContent>
            </div>
        );
    }

}