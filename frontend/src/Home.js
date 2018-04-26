import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from './Restaurants'
import FoodType from './foodTypeCheck'




class Home extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>


                <h2>Home</h2>

                <div id="Login">
                <input placeholder="Location" id="4" />
                <button id="8">search</button>
                </div>
                <div class="container">
                 <FoodType id="3"/>
                 
                <Restaurants id="5b" />         
            </div>
            </div>
        )
    }

}

export default Home;
