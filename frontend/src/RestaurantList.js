import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from './Restaurants'





class RestaurantList extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
               <h2>List of dummy restaurants</h2>
                <div>
                    <Restaurants />             
                </div>
            </div>
        )
    }

}

export default RestaurantList;
const NoMatch = () => (
    <div>
      <h1>404 Wrong url!</h1>
    </div>
  );