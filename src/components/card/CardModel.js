// DEPENDENCY
import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default class CardModelComponent extends React.Component {

    render() {
        const { item } = this.props;
        const { montant, name } = item;

        const cardStyle = {
            height: '250px',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 0 4px rgba(126, 91, 91, 0.5)',
        };

        const cardInfoStyle = {
            height: '100%',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        };

        const cardMontantStyle = {
            fontSize: '18px'
        };

        return (

            <div style={cardStyle}>
                <div style={cardInfoStyle}>
                    <h6 className='uppercase'>{name}</h6>
                    <span style={cardMontantStyle}>{montant}</span>
                    <Button className='ant-btn-primary'>Voir plus <ArrowRightOutlined /></Button>
                </div>
            </div>
        );
    }
}