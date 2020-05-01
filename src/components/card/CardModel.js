// DEPENDENCY
import React from 'react';

export default class CardModelComponent extends React.Component {

    render() {
        const { item } = this.props;
        const { alt, description, image, short_description, title } = item;

        const cardBackground = {
            background: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        return (

            <div class='card' style={cardBackground}>
                <div class='card-info'>
                    <h6 class='card-title'>{title}</h6>
                    <p class='card-description'>{short_description}</p>
                </div>
            </div>
        );
    }
}