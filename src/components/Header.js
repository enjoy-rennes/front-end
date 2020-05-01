// DEPENDENCY
import React from 'react';
import Link from 'next/link';

// COMPONENT
import HeaderMenu from '../components/menu/HeaderMenu';

// ASSET
import Logo from './Logo';

export default class HeaderComponent extends React.Component {

    render() {
        return (
            <div className='header'>
                <Link href='/'>
                    <a rel='noopener noreferrer' >
                        <div className='no-white-space'>
                            <Logo />
                            <span className='logo-title' style={{ color: 'white' }}>Enjoy Rennes™</span>
                        </div>
                    </a>
                </Link>
                <HeaderMenu />
            </div>
        )
    }
}

