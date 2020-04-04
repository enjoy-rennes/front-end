// DEPENDENCY
import React from "react";
import { Button, Col, Row } from "antd";
import Link from 'next/link';

// COMPONENT
import RowLayout from "../components/layout/RowLayout";
import ColLayout from "../components/layout/ColLayout";
import Home from "../components/Home"

// Fetch
import { getPlaceFetch } from "../fetch/place";

export default class HomeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            place: null,
        }
    }

    componentDidMount = () => {
        this.getPlace();
    }

    getPlace = () => {
        this.setState({ place: getPlaceFetch });
    }

    render() {
        const { place } = this.state;
        return (
            <div className="page" >
                <Home place={place} />
            </div>
        )
    }
}