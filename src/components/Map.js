// DEPENDENCY
import React from 'react';

// COMPONENT
import RowLayout from '../components/layout/RowLayout';

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
            <div className='map-container page'>
                <RowLayout>
                    <h3>La carte</h3>
                </RowLayout>

                <iframe
                    className='map'
                    src={'https://www.google.com/maps/d/u/1/embed?mid=18FeJq0Bbd8iDlUVpYlhhUWlQnLsx3kfH&z=' + zoomLevel}
                    style={{ border: '0' }}
                    title='enjoy-rennes-maps'
                />
            </div>
        );
    }

}