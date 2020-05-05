// DEPENDENCY
import React from 'react';
import { Col } from 'antd';

// COMPONENTS
import RowLayout from '../layout/RowLayout';
import CardModel from './CardModel';

export default class CardsContainer extends React.Component {

    render() {
        const { data } = this.props;

        const GroupCardModel = (data != null) && data.map((item) =>
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                <CardModel item={item} />
            </Col>
        );

        return (
            <div className='cards-container'>
                <RowLayout gutter={[16, 16]}>

                    {
                        data &&
                        GroupCardModel
                    }

                </RowLayout>
            </div>
        );
    }
}