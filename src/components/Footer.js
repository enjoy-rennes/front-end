// DEPENDENCY
import React from "react";
import { Col, Row } from "antd";

export default function FooterComponent() {
    return (
        <Row type="flex" justify="space-around">
            <Col span={12}>
                <Row type="flex" justify="center">
                    <span className="text-black">Enjoy Rennes 2020 - Tous droits réservés</span>
                </Row >
            </Col>
            <Col span={12}>
                <Row type="flex" justify="center">
                    <span className="text-black">Réalisé avec <span>❤</span> par Enjoy Rennes</span>
                </Row >
            </Col>
        </Row >
    );
}