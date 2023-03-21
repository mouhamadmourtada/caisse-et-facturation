import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation(props) {
    return (
        <div>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="login">
                    <li>login</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Navigation;