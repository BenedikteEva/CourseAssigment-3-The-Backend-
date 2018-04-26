import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import apiFacade from './apiFacade';




const Navigation = () => {

    const userRole = apiFacade.getRole();

    return (
        <div>

            <ul className="header">
                
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>

                <li><NavLink exact activeClassName="active" to="/RestaurantList">RestaurantsList</NavLink></li>
      
                {userRole === "user" && <li><NavLink activeClassName="active" to="/about">User History</NavLink></li>}
                {userRole === "user" && <li><NavLink activeClassName="active" to="/texts">Profile</NavLink></li>}
                {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/users">Statistics</NavLink></li>}
                {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/users">User List</NavLink></li>}


            </ul>

        </div>
    );
}

export default Navigation;
