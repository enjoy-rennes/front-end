// DEPENDENCY
import React from 'react';
import { Button, Form, Input } from 'antd';

export default class HelpsFormComponent extends React.Component {

    render() {
        return (
            <Form name='help-form'>
                <Form.Item rules={[{ required: true, type: 'number' }]}
                    name={['user', 'age']}
                    label='Age'
                >
                    <Input />
                </Form.Item>
                <Form.Item rules={[{ type: 'email' }]}
                    name={['user', 'email']}
                    label='Email'
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Submit
                        </Button>
                </Form.Item>
            </Form>
        );
    }
}