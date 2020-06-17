// DEPENDENCY
import React from 'react';
import { Col } from 'antd';

// COMPONENTS
import RowLayout from '../layout/RowLayout';
import CardModel from './CardModel';

export default class CardsContainerModel extends React.Component {

    render() {
        const { data } = this.props;

        const cardContainerStyle = {
            padding: '16px 0'
        };

        const GroupCardModel = (data != null) && data.map((item) =>
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                <CardModel item={item} />
            </Col>
        );

        return (
            <RowLayout style={cardContainerStyle}>
                {
                    data &&
                    GroupCardModel
                }
            </RowLayout>
        );
    }
}