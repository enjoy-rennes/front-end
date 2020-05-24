// DEPENDENCY
import React from 'react';

export default class CarousselCardModelComponent extends React.Component {

    render() {
        const { item } = this.props;
        const { alt, description, image, short_description, name } = item;

        const cardBackground = {
            background: image ? 'url(' + image + ')' : 'null',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        return (

            <div className='caroussel-card' style={cardBackground}>
                <div className='caroussel-card-info'>
                    <h6 className='caroussel-card-name'>{name}</h6>
                    <p className='caroussel-card-description'>{short_description}</p>
                </div>
            </div>
        );
    }
}