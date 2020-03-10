// DEPENDENCY
import React from "react";

export default class MapComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            zoomLevel: 13,
        }
    }

    render() {
        const { zoomLevel } = this.state;
        return (
            <div className="map page">
                <iframe className="h-100 w-100" title="enjoy-rennes-maps" src={"https://www.google.com/maps/d/u/1/embed?mid=18FeJq0Bbd8iDlUVpYlhhUWlQnLsx3kfH&z=" + zoomLevel} style={{ border: "0" }}></iframe>
            </div>
        );
    }
}