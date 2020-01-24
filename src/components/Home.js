// DEPENDENCY
import { Gradient } from "react-gradient";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const whiteSecondaryGradients = [
    ["#E5FFFC", "#FFFFFF"]
];
const primarySecondaryGradients = [
    ["#F2E2FC", "#E5FFFC"]
];

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home page">

                <Row className="position-absolute page d-flex justify-content-end w-100" noGutters>
                    <Col lg={2} sm={3}>
                        <Gradient
                            style={{ height: "80%", width: "100%" }}
                            gradients={whiteSecondaryGradients}>
                        </Gradient>
                        <Gradient
                            style={{ height: "20%", width: "100%" }}
                            gradients={primarySecondaryGradients}>
                        </Gradient>
                    </Col>
                    <Col lg={2} sm={3}>
                        <Gradient
                            style={{ height: "20%", width: "100%" }}
                            gradients={primarySecondaryGradients}
                            angle="180deg">
                        </Gradient>
                        <Gradient
                            style={{ height: "80%", width: "100%" }}
                            gradients={whiteSecondaryGradients}
                            angle="180deg">
                        </Gradient>
                    </Col>
                </Row>

                <Row className="position-relative justify-content-center page" noGutters>
                    <Col className="d-flex align-items-center">
                        <Row className="justify-content-center" noGutters>
                            <Col lg={8} sm={6} xs={12} >
                                <Row noGutters>
                                    <span className="uppercase my-5" style={{ fontWeight: "bold", fontSize: "3rem" }}>Retrouver rapidement les <span style={{ color: "#DB82FD" }}>bons plans</span> de la ville de Rennes</span>
                                </Row>
                                <Row className="d-flex justify-content-center" noGutters>
                                    <Button className="uppercase my-5" variant="outline-secondary">Découvrir les bons plans</Button>
                                </Row>
                            </Col>
                            <Col lg={2} sm={4} xs={6} >

                                <img
                                    alt="homme métisé qui sourit"
                                    className="img-fluid my-5"
                                    src="/assets/image/hero_picture.jpg"
                                    style={{ borderRadius: "50%" }}
                                />

                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div >
        )
    }
}