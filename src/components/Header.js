// DEPENDENCY
import React from "react";
import { Menu, Icon } from "antd";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.pathName,
        }
    }

    handleMenuClick = e => {
        this.setState({
            current: e.key,
        });
    };

    render() {

        return (
            <Menu onClick={this.handleMenuClick} selectedKeys={[this.props.pathName]} mode="horizontal">
                <Menu.Item key="home">
                    <a href="/" rel="noopener noreferrer">
                        <Icon type="home" />
                        Accueil
                    </a>
                </Menu.Item>
                <Menu.Item key="helps" >
                    <a href="/helps" rel="noopener noreferrer">
                        <Icon type="euro" />
                        Calculer mes aides
                    </a>
                </Menu.Item>
                <Menu.Item key="map">
                    <a href="/map" rel="noopener noreferrer">
                        <Icon type="compass" />
                        Carte
                    </a>
                </Menu.Item>
                <Menu.Item key="contact">
                    <a href="/contact" rel="noopener noreferrer">
                        <Icon type="mail" />
                        Contact
                    </a>
                </Menu.Item>
            </Menu>
        )
    }
}
