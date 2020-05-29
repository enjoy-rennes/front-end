// DEPENDENCY
import React from 'react';
import { Spin } from 'antd';

// COMPONENT
import Helps from '../components/Helps';

// DATA
import { getHelpsFetch } from '../fetch/help';

export default class HelpsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            helps: getHelpsFetch || undefined,
        }
    }

    componentDidMount() {
        const helps = this.state.helps && this.state.helps.map((item) => {
            item.buttonLink = "help/" + item.id;
            return item;
        });

        this.setState({ helps: helps })
    }

    render() {
        let { helps } = this.state;

        return (
            <Spin spinning={!helps}>
                {helps &&
                    <Helps data={helps} />
                }
            </Spin>
        );
    }
}