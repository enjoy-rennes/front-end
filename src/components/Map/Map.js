import React from 'react';

export default class MapsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            height: 1000,
            width: 600,
        }
    }

    render() {
        const { height, width } = this.state;
        return (
            <iframe src="https://www.google.com/maps/d/u/1/embed?mid=18FeJq0Bbd8iDlUVpYlhhUWlQnLsx3kfH" width={width} height={height}></iframe>
        );
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight - 200 });
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

}