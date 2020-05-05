// DEPENDENCY
import React from 'react';
import { Select } from 'antd';

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

        return (
            <div className='goods-plans-container page'>
                <RowLayout>
                    <h1>Les Bons plans</h1>
                </RowLayout>

                <RowLayout>
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