// DEPENDENCY
import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default class CardModelComponent extends React.Component {

    render() {
        const { item } = this.props;
        const { buttonLink, montant, name } = item;

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

        const cardButtonStyle = {
            marginRight: 'auto'
        }

        return (

            <div style={cardStyle}>
                <div style={cardInfoStyle}>
                    <h6 className='uppercase'>{name}</h6>
                    <span style={cardMontantStyle}>{montant}</span>
                    {buttonLink &&
                        <Link href={buttonLink}>
                            <Button className='ant-btn-primary' style={cardButtonStyle}>Voir plus <ArrowRightOutlined /></Button>
                        </Link>
                    }
                </div>
            </div>
        );
    }
}