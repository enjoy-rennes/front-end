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
            <div className='home page'>
                <Heroes />

                <CarouselContainer
                    buttonLink='/helps'
                    buttonText='Découvrir les aides'
                    description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre"
                    data={place}
                    imageAlt='tour de Rennes'
                    image={tower}
                    title={<h3 className='uppercase'>Les <span className='underline underline-primary'>aides</span> de la ville de Rennes</h3>}
                />

                <CarouselContainer
                    buttonLink='/goods-plans'
                    buttonText='Découvrir bons plans'
                    description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre"
                    data={place}
                    isReverse
                    title={<h3 className='uppercase'>Les <span className='underline underline-primary'>bons plans</span> à découvrir</h3>}
                />

            </div>
        );
    }

}