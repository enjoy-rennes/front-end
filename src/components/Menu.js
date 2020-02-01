// DEPENDENCY
import React from "react";
import { Icon, Menu } from "antd";
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function MenuComponent() {
    const router = useRouter()
    const state = {
        pathname: router.pathname !== "/" ? router.pathname.slice(1) : "home",
    }

    return (
        <Menu selectedKeys={state.pathname} mode="inline" className="w-100">
            <Menu.Item key="home">
                <Link href="/">
                    <a rel="noopener noreferrer" />
                </Link>
                <Icon type="home" />
                <span>Accueil</span>
            </Menu.Item>
            <Menu.Item key="helps">
                <Link href="/helps" >
                    <a rel="noopener noreferrer" />
                </Link>
                <Icon type="euro" />
                <span>Calculer mes aides</span>
            </Menu.Item>
            <Menu.Item key="map">
                <Link href="/map" >
                    <a rel="noopener noreferrer" />
                </Link>
                <Icon type="compass" />
                <span>Carte</span>
            </Menu.Item>
            <Menu.Item key="contact">
                <Link href="/contact">
                    <a rel="noopener noreferrer" />
                </Link>
                <Icon type="mail" />
                <span>Contact</span>
            </Menu.Item>
        </Menu>
    )
}

