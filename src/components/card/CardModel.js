// DEPENDENCY
import React from 'react';
import { Card } from 'antd';

export default class CardModelComponent extends React.Component {

    render() {
        const { item } = this.props;
        const { alt, description, image, short_description, title } = item;
        return (
            <Card
                // hoverable
                style={{ height: '100%' }}
                cover={
                    <img
                        alt={alt}
                        draggable={false}
                        style={{ objectFit: 'cover', height: '200px' }}
                        src={image}
                    />}
            >
                <Card.Meta title={title} description={short_description} />
            </Card>
        );
    }
}