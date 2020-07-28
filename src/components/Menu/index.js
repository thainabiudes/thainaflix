import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/thainaflix.png';
import './Menu.css';
import Button from '../Button/styles.js'

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/" >
                <img className="Logo" src={Logo} alt="Logo aplicação" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Link
            </Button>
        </nav>
    )
}

export default Menu;