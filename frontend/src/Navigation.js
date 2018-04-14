import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import apiFacade from './apiFacade';

//Skal laves til en funktion
class Navigation extends Component {

    render() {

        const userRole = apiFacade.getRole();

        return (
            <div>

                <ul className="header">

                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    {(userRole === "user" || userRole === "admin") && <li><NavLink activeClassName="active" to="/about">About</NavLink></li>}
                    {(userRole === "user" || userRole === "admin") && <li><NavLink activeClassName="active" to="/texts">Texts</NavLink></li>}
                    {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/">Users</NavLink></li>}

                </ul>

            </div>
        );
    }
}

export default Navigation;
