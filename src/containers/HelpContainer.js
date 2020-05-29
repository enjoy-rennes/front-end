// DEPENDENCY
import React from 'react';
import { Spin } from 'antd';

// COMPONENTS
import HelpComponent from '../components/detail/HelpDetailModel';

// DATA
//TODO: get correct data
import { getHelpFetch, getHelpsFetch } from '../fetch/help';

export default class HelpContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            help: getHelpsFetch[0] || undefined,
        }
    }

    render() {
        const { help } = this.state;

        return (
            <Spin spinning={!help}>
                {help &&
                    < HelpComponent data={help} />
                }
            </Spin>
        );
    }
}