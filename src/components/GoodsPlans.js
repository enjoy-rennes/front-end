// DEPENDENCY
import React from 'react';
import { Col, Row, Select } from 'antd';

// COMPONENTS
import CardsContainerModel from '../components/card/CardsContainerModel';
import RowLayout from '../components/layout/RowLayout';

// ASSET
import vilaine from '../../public/assets/promenade-sur-la-vilaine/promenade-sur-la-vilaine.png';

export default class GoodsPlansContainer extends React.Component {

    render() {
        const { data } = this.props;
        const { Option } = Select;

        const filtreStyle = {
            padding: '16px',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around'
        }

        return (
            <div className='goods-plans-container page'>
                <RowLayout>
                    <Col lg={12} sm={24} style={{ padding: '48px' }}>
                        <h1 className='uppercase'><span className='underline underline-primary'>Bons plans</span> à Rennes</h1>
                    </Col>
                    <Col lg={12} sm={0}>
                        <Row justify='end'>
                            <img
                                alt='Promenade sur la vilaine'
                                src={vilaine}
                                style={{ overflow: 'hidden', objectFit: 'cover', maxHeight: '300px' }} />
                        </Row>
                    </Col>
                </RowLayout>

                <RowLayout className='bg-dark' style={filtreStyle}>
                    <span className='uppercase'>Filtre</span>
                    <Select
                        // defaultValue="help"
                        style={{ width: '100%', maxWidth: '200px' }}
                    >
                        <Option value="help">Aide</Option>
                        <Option value="goods-plans">Bons plans</Option>
                    </Select>
                </RowLayout>

                < CardsContainerModel data={data} />

            </div>
        );
    }
}