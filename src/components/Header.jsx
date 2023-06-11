import React from 'react'

import { slide as Menu } from 'react-burger-menu'

import { Link } from 'react-scroll'

import "./Header.scss"

function Header() {
    return (
        <header className='header'>
            <nav>
                <ul className='navigation'>
                    <li className="navigation-item">
                        <Link activeClass='active' smooth spy to='home' offset={0} duration="500">
                            ZBIRKE PJESAMA
                        </Link>
                    </li>
                    <li className="navigation-item">
                        <Link activeClass='active' smooth spy to='about' offset={0} duration="500">
                            O MENI
                        </Link>
                    </li>
                    <li className="navigation-item">
                        <Link activeClass='active' smooth spy to='projects' offset={0} duration="500">
                            PROJEKTI
                        </Link>
                    </li>
                </ul>
                <Menu right>
                    <ul className='navigation'>
                        <li className="navigation-item">
                            <Link activeClass='active' smooth spy to='home' offset={0} duration="500">
                                ZBIRKE PJESAMA
                            </Link>
                        </li>
                        <li className="navigation-item">
                            <Link activeClass='active' smooth spy to='about' offset={0} duration="500">
                                O MENI
                            </Link>
                        </li>
                        <li className="navigation-item">
                            <Link activeClass='active' smooth spy to='projects' offset={0} duration="500">
                                PROJEKTI
                            </Link>
                        </li>
                    </ul>
                </Menu>
            </nav>
        </header>
    )
}

export default Header
