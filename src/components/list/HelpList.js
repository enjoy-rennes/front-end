// DEPENDENCY
import React from 'react';
import { Card, List } from 'antd';

export default class helpList extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <div className='help-list' >
                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 3, xl: 4 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <Card title={item.name}>
                                {item.description}
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}