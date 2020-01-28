// DEPENDENCY
import React from "react";
import { Menu, Icon } from "antd";
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    const state = {
        pathname: router.pathname !== "/" ? router.pathname : "home",
    }

    return (
        <Menu selectedKeys={state.pathname} mode="horizontal">
            <Menu.Item key="home">
                <Link href="/">
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
