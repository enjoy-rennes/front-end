// DEPENDENCY
import React from 'react';
import { Col, Row, Select } from 'antd';

// COMPONENT
import CardsContainerModel from '../components/card/CardsContainerModel';
import RowLayout from '../components/layout/RowLayout';

// ASSET
import republique from '../../public/assets/republique/republique.png';

export default class Helps extends React.Component {

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
            <div className='helps-container page'>
                <RowLayout>
                    <Col lg={12} sm={24} style={{ padding: '48px' }}>
                        <h1 className='uppercase'><span className='underline underline-primary'>Aides</span> à Rennes</h1>
                    </Col>
                    <Col lg={12} sm={0} >
                        <Row justify='end'>
                            <img
                                alt='Place de la république à Rennes'
                                src={republique}
                                style={{ overflow: 'hidden', objectFit: 'cover', maxHeight: '300px' }} />
                        </Row>
                    </Col>
                </RowLayout>

                <RowLayout className='bg-dark' style={filtreStyle}>
                    <span className='uppercase'>Filtre</span>
                    <Select
                        // defaultValue="data"
                        style={{ width: '100%', maxWidth: '200px' }}
                    >
                        {/* TODO: à actualiser*/}
                        <Option value="money">Financière</Option>
                        <Option value="habitation">Habitation</Option>
                        <Option value="student">Etudiant</Option>
                    </Select>
                </RowLayout>

                < CardsContainerModel data={data} />

            </div>
        );
    }
}