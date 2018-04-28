import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
// import ApiFacade from './ApiFacade';
import facade from "./FakeFacade";



const Navigation = (props) => {

    const userRole = facade.getRole
console.log(userRole)
    return (
        <div>

            <ul className="header">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/error">Error</NavLink></li>
                {userRole === "user" && <li><NavLink activeClassName="active" to="/user_history">User History</NavLink></li>}
                {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/statistics">Statistics</NavLink></li>}
                {userRole === "user" && <li><NavLink activeClassName="active" to="/profile">Profile</NavLink></li>}
                {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/users">User List</NavLink></li>}
                {(userRole !== "user" && userRole !== "admin") && <li><NavLink activeClassName="active" to="/register">Register</NavLink></li>}

            </ul>

        </div>
    );
}

export default Navigation;
