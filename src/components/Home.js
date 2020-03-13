// DEPENDENCY
import React from "react";
import { Button, Col, Row } from "antd";
import { FullPage, Slide } from 'react-full-page';
import Link from 'next/link';

export default class HomeComponent extends React.Component {

    render() {
        return (
            <FullPage className="home" duration={500} >

                <Slide className="page">
                    <Row className="content" type="flex" justify="center" align="middle">
                        <Col>
                            <h2 className="title" >Retrouvez rapidement les <span className="bg-black text-primary">bons plans</span> de la ville de Rennes</h2>
                            <Row type="flex" justify="center">
                                {/* <Link href="/"> */}
                                <Button type="default" size="large" ghost>Découvrir les bons plans</Button>
                                {/* </Link> */}
                            </Row>
                        </Col>
                    </Row>
                </Slide>

                <Slide className="page bg-secondary">
                    <Row className="content" type="flex" justify="space-around" align="middle">
                        <Col xs={24} sm={24} md={11}>
                            <h2 className="subtitle" >Pour calculer <span className="bg-black text-secondary">les aides</span> selon ton profil</h2>
                            <Row type="flex" justify="center">
                                <Link href="/helps">
                                    <Button type="default" size="large" ghost>C'est ici</Button>
                                </Link>
                            </Row>
                        </Col>
                        <Col xs={24} sm={24} md={11}>
                            <h2 className="subtitle" >Pour découvrir <span className="bg-black text-secondary">les réductions</span> autour de toi</h2>
                            <Row type="flex" justify="center">
                                <Link href="/map">
                                    <Button type="default" size="large" ghost>C'est par là</Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </Slide>

                <Slide className="page">
                    <Row className="content" type="flex" justify="center" align="middle">
                        <Col>

                        </Col>
                    </Row>
                </Slide>

            </FullPage>
        )
    }
}