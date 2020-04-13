// DEPENDENCY
import React from 'react';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined} from '@ant-design/icons';
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
            text: 'text-primary',
            dot: 'dot-primary'
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
                    this.setState({ text: 'text-secondary' })
                    this.setState({ dot: 'dot-secondary' })
                    break;
                    default:
                        this.setState({ background: 'bg-primary' })
                        this.setState({ text: 'text-primary' })
                        this.setState({ dot: 'dot-secondary' })
                    break;
            }
            this.setState({ type: type });
        }
    }

    render() {
        const { props } = this;
        const { background, text, type } = this.state;
        const { buttonLink, buttonText, data, description, image, imageAlt, title } = props;
        return (
            <div className={background} style={{ paddingBottom: '80px' }}>
                <Row type='flex' justify='center'>

                    <Col span={16} className='bg-light' >
                        <RowLayout className='carousel-container-top-title'>
                            {title}
                            <span style={{margin: '20px 0'}}>{description}</span>
                            <Link href={buttonLink}>
                                <Button type={type}>{buttonText}<ArrowRightOutlined /></Button>
                            </Link>
                        </RowLayout>
                    </Col>

                    <Col span={8} className={background} >
                        <Row type='flex' justify='end' align='bottom'>
                            <img
                            alt={imageAlt}
                            className='carousel-container-image'
                            draggable={false}
                            src={image}
                            />
                        </Row>
                    </Col>

                </Row>

                <CarouselModel data={data} text={text} />
            </div >
        );
    }
}