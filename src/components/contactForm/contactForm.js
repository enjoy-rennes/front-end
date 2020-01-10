import React from 'react';
import { Button, Col, InputGroup, Form } from 'react-bootstrap';
import { IoIosMail } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    render() {
        console.log(this.state);
        return (
            <Form onSubmit={this.handleSubmit} className='m-auto' >
                <Form.Row>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }} controlId='validationCustom01'>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FaUser />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                name='name'
                                onChange={this.handleInputChange}
                                placeholder='Name'
                                required
                                type='text'
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }} controlId='validationCustomUsername'>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <IoIosMail />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                aria-describedby='inputGroupPrepend'
                                name='email'
                                onChange={this.handleInputChange}
                                placeholder='E-mail*'
                                required
                                type='email'
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }} controlId='validationCustom03'>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <TiDocumentText />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control as='textarea' placeholder='Message*' required />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check type='checkbox' id='checkbox-conditions'>
                        <Form.Check.Input
                            name='message'
                            onChange={this.handleInputChange}
                            required
                            type='checkbox' />
                        <Form.Check.Label>Accepter les termes et conditions*</Form.Check.Label>
                    </Form.Check>
                </Form.Group>
                <Button type='submit'>Submit form</Button>
            </Form>
        );
    }
}
