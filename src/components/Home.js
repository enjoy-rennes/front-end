// DEPENDENCY
import React from 'react';

import CarouselModel from './carousel/CarouselModel';

export default class HomeComponent extends React.Component {
    render() {
        const { place } = this.props;

        return (
            <div>

                <CarouselModel data={place} />

            </div>
        );
    }

}