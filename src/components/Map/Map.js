import React from "react";

export default class MapComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            height: 600,
            width: 800,
        }
    }

    render() {
        const { height, width } = this.state;
        return (
            <iframe className="map-component" title="enjoy-rennes-maps" src="https://www.google.com/maps/d/u/1/embed?mid=18FeJq0Bbd8iDlUVpYlhhUWlQnLsx3kfH" width={width} height={height}></iframe>
        );
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight - 200 });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

}