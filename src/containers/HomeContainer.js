// DEPENDENCY
import React from 'react';
import { Spin } from 'antd';

// COMPONENT
import Home from '../components/Home'

// DATA
import { getPlaceFetch } from '../fetch/place';

export default class HomeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            place: getPlaceFetch || null,
        }
    }

    render() {
        const { place } = this.state;
        return (
            <Spin spinning={!place}>
                {place &&
                    <Home place={place} />
                }
            </Spin>
        )
    }
}