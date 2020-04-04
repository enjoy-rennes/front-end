// DEPENDENCY
import React from "react";
import Carousel from "react-multi-carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import CardModel from "../card/CardModel";

export default class CarouselModelComponent extends React.Component {

    render() {
        const { data } = this.props;
        const GroupCardModel = [];
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 2048 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 2048, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };

        const CustomLeftArrow = ({ onClick, ...rest }) => {
            const {
                onMove,
                carouselState: { currentSlide, deviceType },
            } = rest;
            // onMove means if dragging or swiping in progress.
            return (
                <button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left" onClick={() => onClick()}>
                    <LeftOutlined className='text-primary' />
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
                <button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" onClick={() => onClick()}>
                    <RightOutlined className='text-primary' />
                </button>
            )
        };

        if (data) {
            data.forEach(item => {
                GroupCardModel.push(
                    <CardModel key={item.id} item={item} />
                )
            });
        }

        return (
            <Carousel
                containerClass="carousel-container"
                centerMode={true}
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                dotListClass="custom-dot-list-style"
                draggable={true}
                infinite={true}
                itemClass="carousel-item-padding-40-px"
                keyBoardControl={true}
                responsive={responsive}
                showDots={true}
                ssr={true}
                swipeable={true}
            >
                {GroupCardModel}

            </Carousel >
        );
    }
}