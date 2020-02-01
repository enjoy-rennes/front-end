// DEPENDENCY
import React from "react";
import { Form, Icon, Input, Button } from "antd";

class ContactForm extends React.Component {
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

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator("username")(
                        <Input
                            prefix={<Icon type="user" className="text-black" />}
                            placeholder="Nom d'utilisateur"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("mail", {
                        rules: [{ required: true, message: "Veuillez renseigner votre nom d'utilsiateur" }],
                    })(
                        <Input
                            prefix={<Icon type="mail" className="text-black" />}
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("message", {
                        rules: [{ required: true, message: "Veuillez renseigner votre message" }],
                    })(
                        <Input.TextArea
                            prefix={<Icon type="message" className="text-black" />}
                            placeholder="Message"
                        />,
                    )}
                </Form.Item>

                <Button type="primary" htmlType="submit" className="login-form-button">
                    Envoyer
                     </Button>
            </Form>
        )
    }
}

export default Form.create()(ContactForm)
