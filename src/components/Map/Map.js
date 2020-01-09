import React from 'react';

export default class MapsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            height: 700,
            width: 1000,
        }
    }

    render() {
        const { height, width } = this.state;
        return (
            <div>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1pPeYlRv_9iFegtoMHVb8sE_n5sIdyEGz" width={width} height={height}></iframe>
            </div>
        );
    }
}