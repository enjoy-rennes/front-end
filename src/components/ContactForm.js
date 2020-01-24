// DEPENDENCY
import React from "react";
import { Button, Col, InputGroup, Form } from "react-bootstrap";
import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

export default class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3002/send", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === "success") {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.status === "fail") {
                alert("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="contact-form m-auto" >
                <Form.Row>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FaUser id="name-input" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                aria-label="Name"
                                aria-describedby="name-input"
                                name="name"
                                onChange={this.handleInputChange}
                                placeholder="Name"
                                required
                                type="text"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <IoIosMail id="email-input" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                aria-label="Email"
                                aria-describedby="email-input"
                                name="email"
                                onChange={this.handleInputChange}
                                placeholder="E-mail*"
                                required
                                type="email"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <TiDocumentText id="description-input" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                aria-label="Description"
                                aria-describedby="description-input"
                                as="textarea"
                                placeholder="Message*"
                                required />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Check type="checkbox" id="checkbox-conditions">
                        <Form.Check.Input
                            name="message"
                            onChange={this.handleInputChange}
                            required
                            type="checkbox" />
                        <Form.Check.Label>Accepter les termes et conditions*</Form.Check.Label>
                    </Form.Check>
                </Form.Group>

                <Button className="text-light" variant="dark" type="submit">Submit form</Button>
            </Form>
        );
    }
}
