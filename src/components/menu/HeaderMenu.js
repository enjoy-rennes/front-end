// DEPENDENCY
import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function HeaderMenuComponent() {
    const router = useRouter()
    const state = {
        pathname: router.pathname !== '/' ? router.pathname.slice(1) : 'home',
    }
    const { Item } = Menu;
    return (
        <Menu className='menu' selectedKeys={state.pathname} mode='horizontal' theme='dark' style={{ display: 'flex' }}>
            <Item key='home'>
                <Link href='/'>
                    <a rel='noopener noreferrer' />
                </Link>
                <span>Accueil</span>
            </Item>
            <Item key='helps'>
                <Link href='/helps' >
                    <a rel='noopener noreferrer' />
                </Link>
                <span>Aides</span>
            </Item>
            <Item key='goods-plans'>
                <Link href='/goods-plans'>
                    <a rel='noopener noreferrer' />
                </Link>
                <span>Bons plans</span>
            </Item>
            <Item key='map'>
                <Link href='/map' >
                    <a rel='noopener noreferrer' />
                </Link>
                <span>Carte</span>
            </Item>
        </Menu >
    )
}

