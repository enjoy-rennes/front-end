// DEPENDENCY
import React from "react";
import { Row } from "antd";

// COMPONENT
import ContactFormComponent from "./form/ContactForm";

export default class ContactComponent extends React.Component {
    render() {
        return (
            <Row>
                <ContactFormComponent />
            </Row>
        );
    }

}