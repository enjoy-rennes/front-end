// DEPENDENCY
import React from 'react';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

// Component
import CarouselModel from './CarouselModel';
import RowLayout from '../layout/RowLayout'

export default class CarouselModelComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            type: 'primary',
            background: 'bg-primary',
        }
    }

    componentDidMount = () => {
        this.setType()
    }

    setType = () => {
        const type = this.props.type;
        if (this.props.type != undefined) {
            switch (type) {
                case 'secondary':
                    this.setState({ background: 'bg-secondary' })
                    break;
                default:
                    this.setState({ background: 'bg-primary' })
                    break;
            }
            this.setState({ type: type });
        }
    }

    render() {
        const { props } = this;
        const { background, type } = this.state;
        const { buttonLink, buttonText, data, description, image, imageAlt, title, isReverse } = props;

        return (
            <div className={background} style={{ paddingBottom: '80px', paddingTop: '80px' }}>
                <Row type='flex' justify='center' align='bottom'>

                    <Col xs={24} sm={14} lg={14} className='bg-light' order={isReverse ? 2 : 1}>
                        <Row className='carousel-container-top-title'>
                            <Col>
                                <Row>
                                    {title}
                                </Row>
                                <Row>
                                    <span style={{ margin: '20px 0' }}>{description}</span>
                                </Row>
                                <RowLayout>
                                    <Link href={buttonLink}>
                                        <Button type={type}>{buttonText}<ArrowRightOutlined /></Button>
                                    </Link>
                                </RowLayout>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={0} sm={10} lg={10} className={background} order={isReverse ? 1 : 2}>
                        <Row type='flex' justify={isReverse ? 'start' : 'end'} align='bottom'>
                            {image &&
                                <img
                                    style={{ objectFit: 'cover', height: '350px' }}
                                    alt={imageAlt}
                                    className='carousel-container-image'
                                    draggable={false}
                                    src={image}
                                />
                            }
                        </Row>
                    </Col>

                </Row>

                {
                    data &&
                    <CarouselModel data={data} />
                }
            </div >
        );
    }
}