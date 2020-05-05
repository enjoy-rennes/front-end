// DEPENDENCY
import React from 'react';

// COMPONENT
import Map from '../components/Map';

// COMPONENTS
import RowLayout from '../components/layout/RowLayout';

export default class MapContainer extends React.Component {

    render() {
        return (
            <div className='map-container page'>
                <RowLayout>
                    <h3>La carte</h3>
                </RowLayout>

                <Map height='100%' />
            </div>
        );
    }
}