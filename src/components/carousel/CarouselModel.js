// DEPENDENCY
import React from 'react';
import Carousel from 'react-multi-carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import CarouselCardModel from '../card/CarouselCardModel';

export default class CarouselModelComponent extends React.Component {

    render() {
        const { data } = this.props;
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 10000, min: 1920 },
                items: 5
            },
            largeDesktop: {
                breakpoint: { max: 1920, min: 1600 },
                items: 4
            },
            desktop: {
                breakpoint: { max: 1600, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        }

        const CustomLeftArrow = ({ onClick, ...rest }) => {
            const {
                onMove,
                carouselState: { currentSlide, deviceType },
            } = rest;
            // onMove means if dragging or swiping in progress.
            return (
                <button className='react-multiple-carousel__arrow react-multiple-carousel__arrow--left' onClick={() => onClick()}>
                    <LeftOutlined className='text-light' />
                </button>
            )
        };

        const CustomRightArrow = ({ onClick, ...rest }) => {
            const {
                onMove,
                carouselState: { currentSlide, deviceType },
            } = rest;
            // onMove means if dragging or swiping in progress.
            return (
                <button className='react-multiple-carousel__arrow react-multiple-carousel__arrow--right' onClick={() => onClick()}>
                    <RightOutlined className='text-light' />
                </button>
            )
        };

        const GroupCarouselCardModel = data.map((item) =>
            <CarouselCardModel key={item.id} item={item} />
        );

        return (
            <Carousel
                containerClass='carousel-container'
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                draggable={true}
                infinite={true}
                keyBoardControl={true}
                responsive={responsive}
                showDots={true}
                ssr={true}
                swipeable={true}
            >
                {GroupCarouselCardModel}

            </Carousel >
        );
    }
}