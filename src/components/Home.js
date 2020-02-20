// DEPENDENCY
import React from "react";
import { Button, Col, Row } from "antd";
import { FullPage, Slide } from 'react-full-page';

export default class HomeComponent extends React.Component {

    render() {
        return (
            <FullPage className="home page">

                <Slide className="bg-primary">
                    <Row className="content" type="flex" justify="center" align="middle">
                        <Col>
                            <h2 className="title" >Retrouvez rapidement les <span className="bg-black">bons plans</span> de la ville de Rennes</h2>
                            <Row type="flex" justify="center">
                                <Button type="default" size="large" ghost>Découvrir les bons plans</Button>
                            </Row>
                        </Col>
                    </Row>
                </Slide>

                <Slide className="bg-secondary">
                    <Row className="content" type="flex" justify="center" align="middle">
                        <Col>
                            <h2>2</h2>

                        </Col>
                    </Row>
                </Slide>

                <Slide className="bg-primary">
                    <Row className="content" type="flex" justify="center" align="middle">
                        <Col>
                            <h2>3</h2>

                        </Col>
                    </Row>
                </Slide>

            </FullPage>
        )
    }
}