import React from 'react';
import Logo from '../../assets/images/thainaflix.png';
import './Menu.css';
import Button from '../Button/styles.js'

function Menu () {
    return (
        <nav className="Menu">
            <a href="/" >
                <img className="Logo" src={Logo} alt="Logo aplicação" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Link
            </Button>
        </nav>
    )
}

export default Menu;