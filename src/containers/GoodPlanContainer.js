// DEPENDENCY
import React from 'react';
import { Spin } from 'antd';

// COMPONENTS
import GoodPlanComponent from '../components/detail/GoodPlanDetailModel';

// DATA
//TODO: get correct data
import { getGoodsPlansFetch } from '../fetch/goods-plans';

export default class GoodPlanContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            goodPlan: getGoodsPlansFetch[0] || undefined,
        }
    }

    render() {
        const { goodPlan } = this.state;

        return (
            <Spin spinning={!goodPlan}>
                {goodPlan &&
                    <GoodPlanComponent data={goodPlan} />
                }
            </Spin>
        );
    }
}