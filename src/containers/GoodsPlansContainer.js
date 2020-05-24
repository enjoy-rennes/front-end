// DEPENDENCY
import React from 'react';
import { Col, Row, Select } from 'antd';

// DATA
import { getGoodsPlansFetch } from '../fetch/goods-plans';

// COMPONENTS
import RowLayout from '../components/layout/RowLayout';
import CardsContainer from '../components/card/CardsContainer';

export default class GoodsPlansContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            goodsPlans: undefined,
        }
    }

    componentDidMount = () => {
        this.setState({ goodsPlans: getGoodsPlansFetch });
    }

    render() {
        const { goodsPlans } = this.state;
        const { Option } = Select;

        const filtreStyle = {
            padding: '12px',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around'
        }

        return (
            <div className='goods-plans-container page'>
                <RowLayout>
                    <Col lg={12} sm={24} className='bg-light' style={{ padding: '48px' }}>
                        <h1 className='uppercase'><span className='underline underline-primary'>Bons plans</span> à Rennes</h1>
                    </Col>
                    <Col lg={12} sm={0}>
                    </Col>
                </RowLayout>

                <RowLayout className='bg-dark' style={filtreStyle}>
                    <span>Filtre</span>
                    <Select
                        // defaultValue="help"
                        style={{ width: '100%', maxWidth: '200px' }}
                    >
                        <Option value="help">Aide</Option>
                        <Option value="goods-plans">Bons plans</Option>
                    </Select>
                </RowLayout>

                < CardsContainer data={goodsPlans} />

            </div>
        );
    }
}