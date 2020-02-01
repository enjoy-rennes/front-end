// DEPENDENCY
import React from "react";
import "../styles/base.less";

export default class MapComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            height: 600,
            width: 800,
            zoomLevel: 13,
        }
    }

    render() {
        const { height, width, zoomLevel } = this.state;
        return (
            <iframe className="map-component" title="enjoy-rennes-maps" src={"https://www.google.com/maps/d/u/1/embed?mid=18FeJq0Bbd8iDlUVpYlhhUWlQnLsx3kfH&z=" + zoomLevel} width={width} height={height}></iframe>
        );
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}