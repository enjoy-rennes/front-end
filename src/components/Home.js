// DEPENDENCY
import { Gradient } from "react-gradient";
import React from "react";
import { Button, Col, Row } from "antd";

// PARAMETER
const primaryColor = "#F2E2FC";
const secondaryColor = "#E5FFFC";

const whiteSecondaryGradients = [
    [secondaryColor, "#FFFFFF"]
];
const secondaryPrimaryGradients = [
    [primaryColor, secondaryColor]
];

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home page">

                <Row className="page p-absolute" type="flex" justify="end">
                    <Col lg={4} md={5} sm={6} xs={12}>
                        <Gradient
                            style={{ height: "80%", width: "100%" }}
                            gradients={whiteSecondaryGradients}>
                        </Gradient>
                        <Gradient
                            style={{ height: "20%", width: "100%" }}
                            gradients={secondaryPrimaryGradients}>
                        </Gradient>
                    </Col>
                    <Col lg={4} md={5} sm={6} xs={12}>
                        <Gradient
                            style={{ height: "20%", width: "100%" }}
                            gradients={secondaryPrimaryGradients}
                            angle="180deg">
                        </Gradient>
                        <Gradient
                            style={{ height: "80%", width: "100%" }}
                            gradients={whiteSecondaryGradients}
                            angle="180deg">
                        </Gradient>
                    </Col>
                </Row>

                <Row className="page" type="flex" justify="center" align="middle">
                    <Col>

                        <Row type="flex" justify="center" align="middle">
                            <Col lg={16} md={14} sm={12} xs={20}>

                                <Row style={{ marginBottom: "32px" }}>
                                    <span className="title text-dark uppercase bold">Retrouvez rapidement les <span style={{ color: "#DB82FD" }}>bons plans</span> de la ville de Rennes</span>
                                </Row>
                                <Row type="flex" justify="center">
                                    <Button className="uppercase" >Découvrir les bons plans</Button>
                                </Row>

                            </Col>
                            <Col lg={6} md={8} sm={10} xs={16}>

                                <img
                                    alt="homme à lunettes qui sourit"
                                    src="/assets/image/hero_picture.jpg"
                                    style={{ borderRadius: "50%", height: "100%", width: "100%", margin: "32px 0" }}
                                />

                            </Col>
                        </Row>

                    </Col>
                </Row>

            </div >
        )
    }
}