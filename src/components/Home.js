// DEPENDENCY
import React from 'react';

import CarouselContainer from './carousel/CarouselContainer';
import Heroes from './Heroes';

// ASSET
import tower from '../../public/assets/rennes-tower/rennes-tower.png';

export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const { place } = this.props;

        return (
            <div>
                <Heroes />

                <CarouselContainer
                buttonLink='/lieux'
                buttonText='Découvrir les lieux'
                description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre"
                data={place}
                imageAlt='tour de Rennes'
                image={tower}
                type='secondary'
                title={<h3 className='uppercase'>Les lieux à découvrir sur la ville de Rennes</h3>}
                />

                <CarouselContainer
                buttonLink='/actualite'
                buttonText='Découvrir les actualités'
                description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre"
                data={place}
                title={<h3 className='uppercase'>Les actualités de la ville de Rennes</h3>}
                />

            </div>
        );
    }

}