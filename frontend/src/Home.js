import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import RestaurantList from './RestaurantList'





class Home extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
            

               <h2>Home</h2>

                <div>
                <input placeholder="Location" id="4" />
                <button id="8">search</button>
                </div>
                <div class="container">
                <RestaurantList />         
            </div>
            </div>
        )
    }

}

export default Home;
