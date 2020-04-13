// DEPENDENCY
import React from 'react';

// COMPONENT
import Home from '../components/Home'

// Fetch
import { getPlaceFetch } from '../fetch/place';

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
            <div >
                <Home place={place} />
            </div>
        )
    }
}