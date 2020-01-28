// DEPENDENCY
import React from "react";
import { Menu, Icon } from "antd";
import Link from 'next/link';

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
            <Menu onClick={this.handleMenuClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/" >
                        <a rel="noopener noreferrer">
                            <Icon type="home" />
                            Accueil
                    </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="helps" >
                    <Link href="/helps" >
                        <a rel="noopener noreferrer">
                            <Icon type="euro" />
                            Calculer mes aides
                    </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="map">
                    <Link href="/map" >
                        <a rel="noopener noreferrer">
                            <Icon type="compass" />
                            Carte
                    </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="contact">
                    <Link href="/contact">
                        <a rel="noopener noreferrer">
                            <Icon type="mail" />
                            Contact
                    </a>
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}
