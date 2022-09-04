import React from 'react';
import '../../css/Home/header.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
    <header>
    <div className='title'>
    <img src={logo} className="logo" alt="Logo" />
        <h2> PortFolio de Kayroz </h2>
        </div>
        <ul className="menulink">
        <li>
                            <NavLink to={"/"} exact="true" activeclassname="activePage">
                                Accueil
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to={"/Contact"} activeclassname="activePage">
                               Contact
                            </NavLink>
                            
                        </li>
        </ul>
         
    </header>
    )
}

export default Header;