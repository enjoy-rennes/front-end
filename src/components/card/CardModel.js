// DEPENDENCY
import React from 'react';

export default class CardModelComponent extends React.Component {

    render() {
        const { item } = this.props;
        const { alt, description, image, short_description, name } = item;

        const cardBackground = {
            background: image ? 'url(' + image + ')' : 'null',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        return (

            <div className='card' style={cardBackground}>
                <div className='card-info'>
                    <h6 className='card-name'>{name}</h6>
                    <p className='card-description'>{short_description}</p>
                </div>
            </div>
        );
    }
}