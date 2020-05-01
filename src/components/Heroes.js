// DEPENDENCY
import React from 'react';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

// Component
import RowLayout from './layout/RowLayout'

// ASSET
import fox from '../../public/assets/fox/fox.png';

export default class HeroesComponent extends React.Component {
    render() {

        return (
            <RowLayout className='page bg-primary'>

                <Col span={24}>

                    <RowLayout className='row-title-container' >
                        <img className='fox position-absolute' alt="photo d'un renard en noir et blanc" src={fox} />

                        <Col className='title-container'>
                            <Row className='subtitle' justify='start'>
                                <span >Soyez <span className='underline'>rusé</span> et découvrez</span>
                            </Row>
                            <Row className='title' justify='center'>
                                <span >les bons plans</span>
                            </Row>
                            <Row className='subtitle' justify='end'>
                                <span >de la ville de <span className='underline'>Rennes</span></span>
                            </Row>
                        </Col>

                    </RowLayout >

                    <RowLayout  >
                        <Button size='large' ghost >Découvrir <ArrowRightOutlined /></Button>
                    </RowLayout>
                </Col>

            </RowLayout>
        );
    }

}