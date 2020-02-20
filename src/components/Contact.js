// DEPENDENCY
import React from "react";
import { Row } from "antd";

// COMPONENT
import ContactFormComponent from "./form/ContactForm";

export default class ContactComponent extends React.Component {
    render() {
        return (
            <div className="contact page">
                <Row className="content" type="flex" justify="center" align="middle">
                    <ContactFormComponent />
                </Row>
            </div>
        );
    }

}