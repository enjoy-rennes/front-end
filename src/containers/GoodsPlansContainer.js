// DEPENDENCY
import React from 'react';
import { Spin } from 'antd';

// COMPONENTS
import GoodsPlans from '../components/GoodsPlans'

// DATA
import { getGoodsPlansFetch } from '../fetch/goods-plans';

export default class GoodsPlansContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            goodsPlans: getGoodsPlansFetch || undefined,
        }
    }
    componentDidMount() {
        const goodsPlans = this.state.goodsPlans && this.state.goodsPlans.map((item) => {
            item.buttonLink = "good-plan/" + item.id;
            return item;
        });

        this.setState({ goodsPlans: goodsPlans })
    }
    render() {
        let { goodsPlans } = this.state;

        return (
            <Spin spinning={!goodsPlans}>
                {goodsPlans &&
                    <GoodsPlans data={goodsPlans} />
                }
            </Spin>
        );
    }
}