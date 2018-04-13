import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import apiFacade from './apiFacade';

//Skal laves til en funktion
class Navigation extends Component {
    
    render() {

        const userRole = apiFacade.getRole();

        if (userRole === "user") {
            var navigationView = <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        } else {
            navigationView = <li></li>
        }

        return (
            <div>

                <ul className="header">

                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    {navigationView}
                    <li><NavLink activeClassName="active" to="/texts">Texts</NavLink></li>

                </ul>

            </div>
        );
    }
}

export default Navigation;
